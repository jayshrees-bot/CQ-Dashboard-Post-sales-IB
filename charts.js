function renderCharts() {
  const agentList = Object.values(AGENTS).sort((a, b) => b.cq - a.cq);
  const names = agentList.map(a => a.name.replace('_', ' '));
  const cqs = agentList.map(a => a.cq);
  const targets = agentList.map(() => 95);
  const colors = agentList.map(a => a.color);

  // Chart 1: CQ Scores vs Target
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
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Agent CQ Scores vs Target', font: { size: 14, weight: '600' } }
        },
        scales: {
          y: { min: 60, max: 100, ticks: { callback: v => v + '%' } }
        }
      }
    });
  }

  // Chart 2: Error distribution by parameter
  const ctx2 = document.getElementById('errorDistChart');
  if (ctx2) {
    const paramTotals = { ss: 0, prob: 0, sol: 0, fu: 0, tag: 0 };
    Object.values(AGENTS).forEach(a => {
      Object.keys(paramTotals).forEach(p => paramTotals[p] += a.params[p]);
    });
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
          title: { display: true, text: 'Error Distribution by Parameter', font: { size: 14, weight: '600' } }
        }
      }
    });
  }

  // Chart 3: Errors per agent
  const ctx3 = document.getElementById('agentErrorChart');
  if (ctx3) {
    new Chart(ctx3, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [
          { label: 'Soft Skills', data: agentList.map(a => a.params.ss), backgroundColor: PARAM_COLORS.ss + 'CC', borderColor: PARAM_COLORS.ss, borderWidth: 1, borderRadius: 4 },
          { label: 'Probing', data: agentList.map(a => a.params.prob), backgroundColor: PARAM_COLORS.prob + 'CC', borderColor: PARAM_COLORS.prob, borderWidth: 1, borderRadius: 4 },
          { label: 'Solution', data: agentList.map(a => a.params.sol), backgroundColor: PARAM_COLORS.sol + 'CC', borderColor: PARAM_COLORS.sol, borderWidth: 1, borderRadius: 4 },
          { label: 'Follow Up', data: agentList.map(a => a.params.fu), backgroundColor: PARAM_COLORS.fu + 'CC', borderColor: PARAM_COLORS.fu, borderWidth: 1, borderRadius: 4 },
          { label: 'Tagging', data: agentList.map(a => a.params.tag), backgroundColor: PARAM_COLORS.tag + 'CC', borderColor: PARAM_COLORS.tag, borderWidth: 1, borderRadius: 4 },
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: 'Errors per Agent by Parameter', font: { size: 14, weight: '600' } }
        },
        scales: { x: { stacked: true }, y: { stacked: true } }
      }
    });
  }

  // Chart 4: Heatmap table
  const heatmapDiv = document.getElementById('heatmapTable');
  if (heatmapDiv) {
    const params = ['ss', 'prob', 'sol', 'fu', 'tag'];
    const maxVal = Math.max(...Object.values(AGENTS).flatMap(a => params.map(p => a.params[p])));
    let html = `<table style="width:100%;border-collapse:collapse;font-size:13px">
      <thead><tr style="background:#f5e8ff">
        <th style="padding:8px 12px;text-align:left;font-weight:700;color:#7B2D8B">Agent</th>
        ${params.map(p => `<th style="padding:8px;text-align:center;font-weight:700;color:#7B2D8B">${PARAM_LABELS[p]}</th>`).join('')}
        <th style="padding:8px;text-align:center;font-weight:700;color:#7B2D8B">Total</th>
      </tr></thead><tbody>`;

    agentList.forEach((agent, i) => {
      html += `<tr style="background:${i % 2 === 0 ? '#fff' : '#fdf6ff'}">
        <td style="padding:8px 12px;font-weight:600;color:#333">${agent.name.replace('_', ' ')}</td>`;
      params.forEach(p => {
        const val = agent.params[p];
        const intensity = maxVal > 0 ? val / maxVal : 0;
        const bg = val === 0 ? '#e8f5e9' : `rgba(123,45,139,${0.15 + intensity * 0.7})`;
        const color = val === 0 ? '#2e7d32' : intensity > 0.6 ? '#fff' : '#333';
        html += `<td style="padding:8px;text-align:center;background:${bg};color:${color};font-weight:${val > 0 ? '700' : '400'}">${val}</td>`;
      });
      const total = params.reduce((s, p) => s + agent.params[p], 0);
      html += `<td style="padding:8px;text-align:center;font-weight:700;color:#7B2D8B">${total}</td></tr>`;
    });

    // Totals row
    html += `<tr style="background:#f5e8ff;font-weight:700">
      <td style="padding:8px 12px;color:#7B2D8B">Team Total</td>`;
    params.forEach(p => {
      const total = agentList.reduce((s, a) => s + a.params[p], 0);
      html += `<td style="padding:8px;text-align:center;color:#7B2D8B">${total}</td>`;
    });
    const grandTotal = agentList.reduce((s, a) => s + a.totalErrors, 0);
    html += `<td style="padding:8px;text-align:center;color:#7B2D8B">${grandTotal}</td></tr>`;
    html += `</tbody></table>`;
    heatmapDiv.innerHTML = html;
  }
}
