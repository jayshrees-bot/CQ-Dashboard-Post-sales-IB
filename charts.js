function renderCharts() {
  const agentList = Object.values(AGENTS).sort((a, b) => b.cq - a.cq);
  const names = agentList.map(a => a.name.replace('_', ' '));
  const cqs = agentList.map(a => a.cq);
  const targets = agentList.map(() => 95);
  const colors = agentList.map(a => a.color);

  // Chart 1: CQ Scores vs Target — with data labels
  const ctx1 = document.getElementById('cqChart');
  if (ctx1) {
    new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [
          {
            label: 'CQ Score',
            data: cqs,
            backgroundColor: colors.map(c => c + 'CC'),
            borderColor: colors,
            borderWidth: 2,
            borderRadius: 6,
          },
          {
            label: 'Target (95%)',
            data: targets,
            type: 'line',
            borderColor: '#e53935',
            borderWidth: 2,
            borderDash: [6, 3],
            pointRadius: 0,
            fill: false,
            datalabels: { display: false }
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Agent CQ Scores vs Target', font: { size: 14, weight: '600' } },
          datalabels: {
            anchor: 'end',
            align: 'end',
            color: '#333',
            font: { weight: '700', size: 11 },
            formatter: (v, ctx) => ctx.datasetIndex === 0 ? v + '%' : null,
            display: (ctx) => ctx.datasetIndex === 0
          }
        },
        scales: {
          y: { min: 60, max: 108, ticks: { callback: v => v + '%' } }
        }
      },
      plugins: [ChartDataLabels]
    });
  }

  // Chart 2: Error distribution — doughnut with data labels
  const ctx2 = document.getElementById('errorDistChart');
  if (ctx2) {
    const paramTotals = { ss: 0, prob: 0, sol: 0, fu: 0, tag: 0 };
    Object.values(AGENTS).forEach(a => {
      Object.keys(paramTotals).forEach(p => paramTotals[p] += a.params[p]);
    });
    const totalErrs = Object.values(paramTotals).reduce((s, v) => s + v, 0);
    new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: Object.keys(paramTotals).map(p => PARAM_LABELS[p]),
        datasets: [{
          data: Object.values(paramTotals),
          backgroundColor: Object.keys(paramTotals).map(p => PARAM_COLORS[p] + 'CC'),
          borderColor: Object.keys(paramTotals).map(p => PARAM_COLORS[p]),
          borderWidth: 2,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'right' },
          title: { display: true, text: 'Error Distribution by Parameter', font: { size: 14, weight: '600' } },
          datalabels: {
            color: '#fff',
            font: { weight: '700', size: 11 },
            textShadowBlur: 4,
            textShadowColor: 'rgba(0,0,0,0.4)',
            formatter: (v) => {
              if (v === 0) return '';
              const pct = Math.round(v / totalErrs * 100);
              return `${v} (${pct}%)`;
            },
            display: v => v.dataset.data[v.dataIndex] > 0
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  }

  // Chart 3: Stacked bar — total label on top
  const ctx3 = document.getElementById('agentErrorChart');
  if (ctx3) {
    const paramKeys = ['ss', 'prob', 'sol', 'fu', 'tag'];
    const dsConfig = [
      { label: 'Soft Skills', key: 'ss',   color: PARAM_COLORS.ss },
      { label: 'Probing',     key: 'prob',  color: PARAM_COLORS.prob },
      { label: 'Solution',    key: 'sol',   color: PARAM_COLORS.sol },
      { label: 'Follow Up',   key: 'fu',    color: PARAM_COLORS.fu },
      { label: 'Tagging',     key: 'tag',   color: PARAM_COLORS.tag },
    ];
    new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: names,
        datasets: dsConfig.map((d, di) => ({
          label: d.label,
          data: agentList.map(a => a.params[d.key]),
          backgroundColor: d.color + 'CC',
          borderColor: d.color,
          borderWidth: 1,
          datalabels: {
            display: (ctx) => {
              // show count inside segment only if > 0
              return ctx.dataset.data[ctx.dataIndex] > 0;
            },
            anchor: 'center',
            align: 'center',
            color: '#fff',
            font: { weight: '700', size: 10 },
            textShadowBlur: 3,
            textShadowColor: 'rgba(0,0,0,0.5)',
            formatter: v => v > 0 ? v : null
          }
        }))
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Errors per JC by Parameter', font: { size: 14, weight: '600' } },
          datalabels: {}
        },
        scales: {
          x: { stacked: true },
          y: { stacked: true, ticks: { stepSize: 5 } }
        }
      },
      plugins: [ChartDataLabels]
    });
  }

  // Chart 4: JC Wise Error Count (renamed from heatmap)
  const heatmapDiv = document.getElementById('heatmapTable');
  if (heatmapDiv) {
    const params = ['ss', 'prob', 'sol', 'fu', 'tag'];
    const maxVal = Math.max(...Object.values(AGENTS).flatMap(a => params.map(p => a.params[p])));
    let html = `<table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead><tr style="background:linear-gradient(135deg,#7B2D8B,#5B1668);">
        <th style="padding:9px 12px;text-align:left;font-weight:700;color:white;">JC Name</th>
        ${params.map(p => `<th style="padding:9px 8px;text-align:center;font-weight:700;color:white;font-size:11px">${PARAM_LABELS[p]}</th>`).join('')}
        <th style="padding:9px 8px;text-align:center;font-weight:700;color:white;">Total</th>
      </tr></thead><tbody>`;

    agentList.forEach((agent, i) => {
      html += `<tr style="background:${i % 2 === 0 ? '#fff' : '#fdf6ff'}">
        <td style="padding:9px 12px;font-weight:600;color:#333">${agent.name.replace('_', ' ')}</td>`;
      params.forEach(p => {
        const val = agent.params[p];
        const intensity = maxVal > 0 ? val / maxVal : 0;
        const bg = val === 0 ? '#e8f5e9' : `rgba(123,45,139,${0.15 + intensity * 0.7})`;
        const color = val === 0 ? '#2e7d32' : intensity > 0.55 ? '#fff' : '#333';
        html += `<td style="padding:9px 8px;text-align:center;background:${bg};color:${color};font-weight:700">${val}</td>`;
      });
      const total = params.reduce((s, p) => s + agent.params[p], 0);
      html += `<td style="padding:9px 8px;text-align:center;font-weight:800;color:#7B2D8B">${total}</td></tr>`;
    });

    html += `<tr style="background:#f5e8ff;">
      <td style="padding:9px 12px;color:#7B2D8B;font-weight:800">Team Total</td>`;
    params.forEach(p => {
      const total = agentList.reduce((s, a) => s + a.params[p], 0);
      html += `<td style="padding:9px 8px;text-align:center;color:#7B2D8B;font-weight:800">${total}</td>`;
    });
    const grandTotal = agentList.reduce((s, a) => s + a.totalErrors, 0);
    html += `<td style="padding:9px 8px;text-align:center;color:#7B2D8B;font-weight:800">${grandTotal}</td></tr>`;
    html += `</tbody></table>`;
    heatmapDiv.innerHTML = html;
  }
}
