import { Zap, Mail, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-1.5 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                way<span className="text-orange-500">2ai</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Premium n8n workflow templates for businesses that want to automate smarter, not harder.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2.5">
              <li><a href="#workflows" className="text-sm text-slate-400 hover:text-white transition-colors">Individual Workflows</a></li>
              <li><a href="#bundles" className="text-sm text-slate-400 hover:text-white transition-colors">Workflow Bundles</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Custom Workflows</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Setup Guides</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#faq" className="text-sm text-slate-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-800/50 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Stay Updated</h4>
              <p className="text-sm text-slate-400">Get notified when we release new workflows and updates.</p>
            </div>
            <div className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
              />
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:from-orange-600 hover:to-red-700 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © 2025 way2ai. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Made with ❤️ for the n8n community
          </p>
        </div>
      </div>
    </footer>
  );
}
