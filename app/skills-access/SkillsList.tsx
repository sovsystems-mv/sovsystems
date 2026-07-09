'use client';
    
    export default function SkillsList() {
      const skills = [
        { name: "Anti-Slop", file: "anti-slop.md" },
        { name: "Auto-Improve Skill", file: "Auto-Improve Skill.md" },
        { name: "Claude Code Troubleshooting", file: "claude-code-troubleshooting.md" },
        { name: "CLAUDE.md", file: "CLAUDE.md" },
        { name: "Content Repurposing", file: "Content Repurposing Skill.md" },
        { name: "CRO Skill", file: "CRO Skill.md" },
        { name: "Crosscheck", file: "Crosscheck.md" },
        { name: "Email Newsletter Writer", file: "Email Newsletter Writer.md" },
        { name: "Infographic Skill", file: "Infographic Skill.md" },
        { name: "Keyword Research", file: "Keyword Research Skill.md" },
        { name: "Landing Page Designer", file: "Landing Page Designer-1.md" },
        { name: "LinkedIn Post Writer", file: "LinkedIn Post Writer.md" },
        { name: "LinkedIn Profile Scraper", file: "LinkedIn Profile Scraper.md" },
        { name: "Local SEO Strategist", file: "Local SEO Strategist.md" },
        { name: "Local Website Designer", file: "Local Website Designer.md" },
        { name: "Marketing Ideas", file: "Marketing Ideas Skill.md" },
        { name: "Nano Banana Pro API Best Practices", file: "Nano Banana Pro API Best Practices.md" },
        { name: "Paid Ads Skill", file: "Paid Ads Skill.md" },
        { name: "Podcast Research", file: "Podcast Research.md" },
        { name: "Sales Email", file: "Sales Email.md" },
        { name: "SEO Audit", file: "SEO Audit Skill.md" },
        { name: "SEO Blog Post Writer", file: "SEO Blog Post Writer.md" },
        { name: "SEO Content Strategy", file: "SEO Content Strategy.md" },
        { name: "Short Form Video Script Creator", file: "Short Form Video Script Creator.md" },
        { name: "Skill Creator", file: "Skill Creator.md" },
        { name: "Social Media Dashboard Builder", file: "Social Media Dashboard Builder.md" },
        { name: "Social Media Manager", file: "Social Media Manager Skill.md" },
        { name: "Video Caption Generator", file: "Video Caption Generator Skill.md" },
        { name: "YouTube SEO Packaging", file: "YouTube SEO Packaging.md" },
        { name: "YT Thumbnail Designer (Evergreen)", file: "YT Thumbnail Designer (Evergreen).md" },
        { name: "MCP Setup", file: "mcp-setup.md" },
      ];
    
      const downloadAll = () => {
        skills.forEach((skill, index) => {
          setTimeout(() => {
            const link = document.createElement('a');
            link.href = `/skills/${encodeURIComponent(skill.file)}`;
            link.download = skill.file;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }, index * 300);
        });
      };
    
      return (
        <div className="min-h-screen bg-[#0A1328] text-white">
          <div className="max-w-3xl mx-auto px-6 py-16">
            <div className="mb-12">
              <div className="text-sm text-[#D4AF37] tracking-widest mb-2">CLAUDE CODE SKILLS STACK</div>
              <h1 className="text-5xl font-semibold tracking-tight mb-4">Your Skills Access</h1>
              <p className="text-lg text-white/70">
                Thank you for your purchase. Download your skills below.
              </p>
            </div>
    
            <div className="flex justify-end mb-4">
              <button
                onClick={downloadAll}
                className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#E8C766] text-[#0A1328] font-medium rounded-xl transition"
              >
                Download All Skills
              </button>
            </div>
    
            <div className="bg-[#13264A] border border-white/10 rounded-3xl p-8">
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium text-lg">{skill.name}</div>
                      <div className="text-sm text-white/50">Markdown • Ready to use</div>
                    </div>
                    <a
                      href={`/skills/${encodeURIComponent(skill.file)}`}
                      download
                      className="px-6 py-2.5 bg-[#D4AF37] hover:bg-[#E8C766] text-[#0A1328] font-medium rounded-xl transition"
                    >
                      Download
                    </a>
                  </div>
                ))}
              </div>
            </div>
    
            <div className="mt-10 text-sm text-white/60">
              Need help? Email <a href="mailto:admin@sovsystems.net" className="text-[#D4AF37]">admin@sovsystems.net</a>
            </div>
          </div>
        </div>
      );
    }
