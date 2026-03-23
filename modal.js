function openModal(agentKey, highlightParam) {
  const agent = AGENTS[agentKey];
  if (!agent) return;

  const target = 95;
  const gap = target - agent.cq;
  const gapText = gap > 0 ? `${gap}% below target` : gap === 0 ? 'At target' : `${Math.abs(gap)}% above target`;
  const gapColor = gap > 10 ? '#e53935' : gap > 0 ? '#FB8C00' : '#43A047';

  const paramOrder = ['ss', 'prob', 'sol', 'fu', 'tag'];
  const paramGrid = paramOrder.map(p => {
    const count = agent.params[p];
    const bg = count === 0 ? '#e8f5e9' : count <= 3 ? '#fff8e1' : '#ffebee';
    const col = count === 0 ? '#2e7d32' : count <= 3 ? '#e65100' : '#b71c1c';
    return `<div style="background:${bg};border-radius:8px;padding:10px 6px;text-align:center;">
      <div style="font-size:20px;font-weight:700;color:${col}">${count}</div>
      <div style="font-size:11px;color:#555;margin-top:2px">${PARAM_LABELS[p]}</div>
    </div>`;
  }).join('');

  const aoiColors = ['#7B2D8B', '#9C4DB8', '#B06ACC'];
  const aoisHtml = agent.aois.map((aoi, i) => `
    <div style="border-left:4px solid ${aoiColors[i]};padding:10px 14px;background:#faf7fb;border-radius:0 8px 8px 0;margin-bottom:8px;">
      <div style="font-size:11px;color:${aoiColors[i]};font-weight:700;text-transform:uppercase;letter-spacing:0.5px">${aoi.cat}</div>
      <div style="font-weight:600;font-size:13px;margin:3px 0;color:#333">${aoi.label}</div>
      <div style="font-size:12px;color:#666">${aoi.text}</div>
    </div>`).join('');

  const highlightedCases = highlightParam ? (agent.paramCaseMap[highlightParam] || []) : [];
  const casesHtml = agent.cases.map((c, i) => {
    const isHighlighted = highlightedCases.includes(i);
    const scoreBg = c.score >= 90 ? '#e8f5e9' : c.score >= 80 ? '#fff8e1' : '#ffebee';
    const scoreColor = c.score >= 90 ? '#2e7d32' : c.score >= 80 ? '#e65100' : '#b71c1c';
    const border = isHighlighted ? `border:2px solid ${PARAM_COLORS[highlightParam]}` : 'border:1px solid #eee';
    const ncfBadge = c.ncf ? `<span style="background:#b71c1c;color:white;font-size:10px;padding:2px 6px;border-radius:10px;margin-left:6px">NCF</span>` : '';
    return `<div style="${border};border-radius:8px;padding:10px 12px;margin-bottom:8px;background:${isHighlighted ? '#fdf6ff' : '#fff'}">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
        <span style="font-size:12px;font-weight:600;color:#444">#${i+1} — ${c.query}${ncfBadge}</span>
        <span style="background:${scoreBg};color:${scoreColor};font-size:12px;font-weight:700;padding:2px 8px;border-radius:10px">${c.score}%</span>
      </div>
      <div style="font-size:11px;color:#666;line-height:1.5">${c.comment || '—'}</div>
    </div>`;
  }).join('');

  const workOnParam = paramOrder.reduce((best, p) => agent.params[p] > agent.params[best] ? p : best, 'ss');
  const workOnCount = agent.params[workOnParam];

  const html = `
    <div style="padding:0">
      <!-- Header -->
      <div style="background:linear-gradient(135deg,#7B2D8B,#5B1668);padding:20px 24px;border-radius:12px 12px 0 0;color:white;display:flex;align-items:center;gap:16px">
        <div style="width:52px;height:52px;border-radius:50%;background:${agent.color};display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:white;border:3px solid rgba(255,255,255,0.4)">${agent.initials}</div>
        <div>
          <div style="font-size:18px;font-weight:700">${agent.name}</div>
          <div style="font-size:13px;opacity:0.85">Post Sales IB · March 2026</div>
        </div>
        <div style="margin-left:auto;display:flex;gap:16px;text-align:center">
          <div><div style="font-size:22px;font-weight:700">${agent.cq}%</div><div style="font-size:11px;opacity:0.8">CQ Score</div></div>
          <div><div style="font-size:22px;font-weight:700">${agent.audits}</div><div style="font-size:11px;opacity:0.8">Audits</div></div>
          <div><div style="font-size:22px;font-weight:700">${agent.ncf}</div><div style="font-size:11px;opacity:0.8">NCF</div></div>
        </div>
      </div>

      <div style="padding:20px 24px">
        <!-- CQ Gauge -->
        <div style="margin-bottom:20px">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span style="font-size:13px;font-weight:600;color:#555">CQ Score vs Target (95%)</span>
            <span style="font-size:13px;font-weight:700;color:${gapColor}">${gapText}</span>
          </div>
          <div style="background:#f0f0f0;border-radius:8px;height:16px;overflow:hidden;position:relative">
            <div style="height:100%;width:${agent.cq}%;background:linear-gradient(90deg,#7B2D8B,#9C4DB8);border-radius:8px;transition:width 0.8s"></div>
            <div style="position:absolute;top:-2px;left:${target}%;transform:translateX(-50%);height:calc(100% + 4px);width:3px;background:#e53935;border-radius:2px"></div>
          </div>
          <div style="display:flex;justify-content:space-between;margin-top:4px;font-size:11px;color:#999">
            <span>0%</span><span style="color:#e53935">🎯 ${target}%</span><span>100%</span>
          </div>
        </div>

        <!-- Param Grid -->
        <div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#555;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.5px">Error Breakdown by Parameter</div>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:8px">${paramGrid}</div>
        </div>

        <!-- AOIs -->
        <div style="margin-bottom:20px">
          <div style="font-size:13px;font-weight:700;color:#555;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.5px">Areas of Improvement</div>
          ${aoisHtml}
        </div>

        <!-- Cases -->
        <div style="margin-bottom:16px">
          <div style="font-size:13px;font-weight:700;color:#555;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.5px">
            Audit Cases${highlightParam ? ` — Filtered by ${PARAM_LABELS[highlightParam]}` : ''}
            <span style="font-weight:400;color:#999;font-size:11px;margin-left:6px">(${agent.cases.length} total)</span>
          </div>
          <div style="max-height:320px;overflow-y:auto;padding-right:4px">${casesHtml}</div>
        </div>

        <!-- What to work on -->
        <div style="background:linear-gradient(135deg,#fdf6ff,#f5e8ff);border:1px solid #d8a8e8;border-radius:10px;padding:14px 16px">
          <div style="font-size:12px;font-weight:700;color:#7B2D8B;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px">💡 Priority Focus Area</div>
          <div style="font-size:13px;color:#444">
            Primary area to improve: <strong>${PARAM_LABELS[workOnParam]}</strong> with <strong>${workOnCount} errors</strong> this month.
            ${workOnCount > 5 ? ' This needs immediate attention.' : workOnCount > 0 ? ' Consistent improvement needed.' : ' Great work — keep maintaining current quality!'}
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById('modalContent').innerHTML = html;
  document.getElementById('agentModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('agentModal').style.display = 'none';
}

window.addEventListener('click', e => {
  if (e.target.id === 'agentModal') closeModal();
});
