// =============================================
// WEEKLY PROGRESS TABS
// =============================================

// Add your weekly progress notes here.
// Each week has a title and a description of what you did.
const weekData = [
  {
    title: "Week 1 — Planning & Research",
    content: "Selected the source video and researched rotoscope techniques. Watched tutorials on using the Roto Brush tool in Adobe After Effects. <br /><a href=\"https://www.youtube.com/watch?v=5i5E24-8nxk\" target=\"_blank\" rel=\"noopener noreferrer\">Watch the Week 1 tutorial video</a>.<br /><br /><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/5i5E24-8nxk\" title=\"Week 1 Rotoscope Tutorial\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
  },
  {
    title: "Week 2 — Setup",
    content: "Installed and set up After Effects and CapCut. Learned the basics of composition settings and timeline navigation. <br /><a href=\"https://youtu.be/-xObmKhBmAU\" target=\"_blank\" rel=\"noopener noreferrer\">Watch the Week 2 tutorial video</a>.<br /><br /><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/-xObmKhBmAU\" title=\"Week 2 Rotoscope Tutorial\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
  },
  {
    title: "Week 3 — Cutting Clips",
    content: "Used CapCut to cut the 1-minute video into 5-second segments. Organized all clips into a dedicated project folder. <br /><a href=\"https://youtu.be/uEq3Wj1c7Sw\" target=\"_blank\" rel=\"noopener noreferrer\">Watch the Week 3 tutorial video</a>.<br /><br /><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/uEq3Wj1c7Sw\" title=\"Week 3 Rotoscope Tutorial\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
  },
  {
    title: "Week 4 — Compositions in AE",
    content: "Created individual compositions in After Effects for each 5-second clip segment. Set up consistent composition settings across all clips. <br /><a href=\"https://youtu.be/oisUJiUzHtg\" target=\"_blank\" rel=\"noopener noreferrer\">Watch the Week 4 tutorial video</a>.<br /><br /><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/oisUJiUzHtg\" title=\"Week 4 Rotoscope Tutorial\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
  },
  {
    title: "Week 5 — Roto Brush Tracing",
    content: "Started tracing the subject using the Roto Brush Tool. Isolated the body into separate layers: shirt, pants, hair, shoes, and skin. <br /><a href=\"https://youtu.be/myBF0gUUijg\" target=\"_blank\" rel=\"noopener noreferrer\">Watch the Week 5 tutorial video</a>.<br /><br /><iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/myBF0gUUijg\" title=\"Week 5 Rotoscope Tutorial\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
  },
  {
    title: "Week 6 — Layer Refinement",
    content: "Refined edges on each isolated layer. Froze propagation on completed layers to prevent accidental edits."
  },
  {
    title: "Week 7 — Color Fills",
    content: "Applied solid color fills to each layer to create the stylized rotoscope look. Experimented with different color palettes."
  },
  {
    title: "Week 8 — Rendering",
    content: "Exported each 5-second composition through the Render Queue in After Effects with consistent codec and resolution settings."
  },
  {
    title: "Week 9 — Compiling in CapCut",
    content: "Combined all rendered clips in CapCut in the correct order. Added background music and synced audio with the animation."
  },
  {
    title: "Week 10 — Lyrics & Background",
    content: "Imported the compiled video into Adobe Premiere Pro. Added animated lyrics synced to the beat and changed background colors per section."
  },
  {
    title: "Week 11 — Final Edits",
    content: "Applied color grading, adjusted transitions, and polished the overall visual appearance of the final video."
  },
  {
    title: "Week 12 — Export & Submission",
    content: "Exported the final video in MP4 format at 1080p. Uploaded to the portfolio and submitted for evaluation."
  }
];

// ---- Build the tabs ----
function buildWeekTabs() {
  const tabContainer = document.getElementById('weekTabs');
  const contentContainer = document.getElementById('weekContent');

  if (!tabContainer || !contentContainer) return; // Only runs on rotoscope.html

  weekData.forEach((week, index) => {
    const btn = document.createElement('button');
    btn.classList.add('week-btn');
    btn.textContent = `Week ${index + 1}`;
    if (index === 0) btn.classList.add('active');

    btn.addEventListener('click', () => {
      // Remove active from all buttons
      document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update content
      contentContainer.innerHTML = `
        <h4>${week.title}</h4>
        <p>${week.content}</p>
      `;
    });

    tabContainer.appendChild(btn);
  });

  // Show Week 1 by default
  contentContainer.innerHTML = `
    <h4>${weekData[0].title}</h4>
    <p>${weekData[0].content}</p>
  `;
}

// Run on page load
document.addEventListener('DOMContentLoaded', buildWeekTabs);