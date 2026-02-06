import { useState } from "react";
import { Search, Filter, Workflow } from "lucide-react";
import { categories, workflows } from "../data/workflows";
import { WorkflowCard } from "./WorkflowCard";

export function WorkflowsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorkflows = workflows.filter((w) => {
    const matchesCategory =
      activeCategory === "All" || w.category === activeCategory;
    const matchesSearch =
      w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="workflows" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-4">
            <Workflow className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-400 font-medium">Individual Workflows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Browse Our Workflow Templates
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Each workflow is production-ready, well-documented, and backed by our support team.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mb-10">
          <div className="relative flex-1 w-full lg:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search workflows..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/50 transition-all"
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white border border-slate-700/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Workflow Grid */}
        {filteredWorkflows.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkflows.map((workflow) => (
              <WorkflowCard key={workflow.id} workflow={workflow} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-slate-500 mb-4">
              <Search className="w-12 h-12 mx-auto opacity-50" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No workflows found</h3>
            <p className="text-slate-400">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
