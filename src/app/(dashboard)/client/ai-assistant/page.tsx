import React from "react";
import { FloatingCard } from "@/components/ui/FloatingCard";

export default function ClientAIAssistant() {
  return (
    <div className="flex-1 w-full h-[calc(100vh-6rem)] max-w-[1600px] mx-auto px-4 lg:px-8 py-6 flex gap-6 relative">
      {/* Left Panel: Thread History */}
      <aside className="hidden lg:flex flex-col w-[30%] min-w-[320px] bg-[#21242D] rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5">
        {/* Header Section */}
        <div className="p-6 pb-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-2xl size-12 flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-white text-3xl">token</span>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight text-white">Apex Builders</h1>
              <p className="text-slate-400 text-xs font-medium tracking-wide uppercase">Client Portal</p>
            </div>
          </div>

          <button className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#0df2f2]/20 to-[#0df2f2]/10 hover:from-[#0df2f2]/30 hover:to-[#0df2f2]/20 text-[#0df2f2] border border-[#0df2f2]/30 rounded-full py-3 px-4 transition-all duration-300 shadow-[0_0_15px_rgba(13,242,242,0.3)] hover:shadow-[0_0_20px_rgba(13,242,242,0.5)] mb-6">
            <span className="material-symbols-outlined text-xl">add</span>
            <span className="font-bold text-sm">New Consultation</span>
          </button>

          {/* Search */}
          <div className="relative group mb-4">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#0df2f2] transition-colors material-symbols-outlined">
              search
            </span>
            <input
              type="text"
              placeholder="Search threads..."
              className="w-full bg-[#1A1D24] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0df2f2]/50 transition-all"
            />
          </div>
        </div>

        {/* Thread List */}
        <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2 custom-scrollbar">
          {/* Active Thread Item */}
          <div className="relative p-4 rounded-2xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
            <div className="absolute left-0 top-4 bottom-4 w-1 bg-[#0df2f2] rounded-r-full shadow-[0_0_10px_#0df2f2]"></div>
            <div className="flex gap-3 pl-2">
              <div className="relative shrink-0">
                <div
                  className="size-12 rounded-full bg-center bg-cover border-2 border-[#0df2f2]/30"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbLfSofdnV3CtHDehntqILFjCiXZK0sCqv076HD_hBzWq60WctceanRMIUnXMlXCVENBRqazdMx4cwe3EHiuAmW2wtO2ZCWYDstpZkj63jorhrsmccGuTnoEvIWqYuIeD0RlcvQeQvgRXGxzL5LgNjUqLe14zvMAwoxnZMIhkZJSM8MVCMHwhrUxv4jvIPLSBR_YO6gO9xOxruGhfH6rgP944ASuZ1OvS2HifVmSPK95NxhmKoWy1pe1rD89zjoOzAzyapHa3RTCM")',
                  }}
                ></div>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-white font-semibold text-sm truncate pr-2">Kitchen Renovation</h3>
                  <span className="text-[10px] text-[#0df2f2] font-medium">Now</span>
                </div>
                <p className="text-gray-400 text-xs truncate">Let's review the marble options.</p>
              </div>
            </div>
          </div>

          {/* Inactive Thread Items */}
          {[
            {
              title: "Permit Inquiry",
              time: "1d ago",
              desc: "Status update on city approval.",
              img: "AB6AXuBZj2gjPJjGtMUG9r7LYpt86bnE6QN1dlAgioG1thD4Qq88sP2tHiH76tSpIZ8QfQMydSImKjey3DKPpVh-GkDHwyvUciuHcNyqugGXgFybd9s4H_I4h0aK1ssdunpahm-J4TZz2UQj2RTi-l--GD8KGydgIFiEWUSua4yO39U9pX00tLZA3EJwO9gHaVbypsJHh7FFxJzG9BTUucaCHGpDLya7Gqq0Hxt4Kls1Sdf22wt-V7mqG64GvA145cZde7s52xR52LWAxwY",
            },
            {
              title: "Material Selection",
              time: "3d ago",
              desc: "Tile samples have arrived.",
              img: "AB6AXuB_M7Pwa0QZa_0q_Uq8E_HEJSDC2ybhPvENanhF8yAFO0z_6dI8jYglaPEYfGTbdJqdpfQd6QEmxHbN5n_fuZ8FY6Yw0xP0zwbNhPaShe9v2vih45PzGuKUWJzM18iPsn7Hm8mLVBbGJ_eg3JmDn5Z4igvLiHG7peWY6JDxGPcr6UHvYquyKIEVJPMTA1ozSdzujBI6ACdzGAidmpcTVz5NGuKltxO0HRn8BCSSupIDVzkS5tKP-BgqJwGO892Ct1i7XvUV3BRRIvY",
            },
          ].map((thread, i) => (
            <div
              key={i}
              className="p-4 rounded-2xl border border-transparent hover:bg-white/5 cursor-pointer transition-colors group"
            >
              <div className="flex gap-3">
                <div className="relative shrink-0">
                  <div
                    className="size-12 rounded-full bg-center bg-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                    style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/${thread.img}")` }}
                  ></div>
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-gray-300 group-hover:text-white font-medium text-sm truncate pr-2">{thread.title}</h3>
                    <span className="text-[10px] text-slate-500">{thread.time}</span>
                  </div>
                  <p className="text-slate-500 text-xs truncate">{thread.desc}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Archived Chats */}
          <div className="p-4 rounded-2xl border border-transparent hover:bg-white/5 cursor-pointer transition-colors group">
            <div className="flex gap-3">
              <div className="relative shrink-0">
                <div className="size-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 text-lg group-hover:bg-slate-700 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">archive</span>
                </div>
              </div>
              <div className="flex flex-col flex-1 min-w-0 justify-center">
                <h3 className="text-gray-400 group-hover:text-white font-medium text-sm truncate">Archived Chats</h3>
                <p className="text-slate-500 text-xs truncate">View 12 past projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom User Profile Snippet */}
        <div className="p-4 mt-auto border-t border-white/5">
          <div className="flex items-center gap-3">
            <div
              className="size-10 rounded-full bg-center bg-cover border border-white/10"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCZ0xofUE1LxX8on8UCH8c_huxgviRAm6ujduBAqhX6dEfedNeOVtgLgagMl5uNSEWX6SN-t3P0_U64wsNBK2bDEsdCwND0WP8jed_0KlzU1xwZomE_H7A3HmMSZ6dRo0lKpV1mTDz9m_0bXKGtkUoMYGaSKkbyFJ2Jgk7zayvcnblkWDXo4y12-D4grPwhV3scsMMJUCDRjytjhcf2j9SCZGP5Vrsjl01wsd7xth43g-Yo8PTvI8zJrkYmBzvC-pRtbNtWR5eMyc")',
              }}
            ></div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white">James Anderson</span>
              <span className="text-xs text-[#0df2f2]/70">Premium Client</span>
            </div>
            <button className="ml-auto text-slate-500 hover:text-white transition-colors material-symbols-outlined">
              settings
            </button>
          </div>
        </div>
      </aside>

      {/* Right Panel: Main Chat */}
      <main className="flex-1 flex flex-col bg-[#21242D] rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">
        {/* Chat Header */}
        <header className="h-20 px-4 md:px-8 flex items-center justify-between border-b border-white/5 bg-[#21242D]/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="size-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0df2f2] text-xl">smart_toy</span>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 size-3 bg-green-500 rounded-full border-2 border-[#21242D] shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-tight">Apex AI Assistant</h2>
              <div className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#0df2f2] animate-pulse"></span>
                <span className="text-[#0df2f2] text-xs font-medium tracking-wide">Online • Design Specialist</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="size-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
              title="Export Chat"
            >
              <span className="material-symbols-outlined">ios_share</span>
            </button>
            <button
              className="size-10 rounded-full flex items-center justify-center text-slate-400 hover:bg-white/5 hover:text-white transition-colors"
              title="More Options"
            >
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </div>
        </header>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-6 space-y-8 scroll-smooth custom-scrollbar" id="chat-container">
          {/* Timestamp Separator */}
          <div className="flex justify-center">
            <span className="bg-white/5 text-slate-400 text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-wider">
              Today, 9:41 AM
            </span>
          </div>

          {/* AI Message */}
          <div className="flex gap-4 max-w-3xl">
            <div className="size-10 rounded-full bg-gradient-to-br from-[#0df2f2]/20 to-transparent p-[1px] shrink-0 mt-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0df2f2] text-sm">smart_toy</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xs text-slate-500 ml-1">Apex AI</div>
              <div className="bg-[#21242D] border border-[#0df2f2]/20 p-5 rounded-[2rem] rounded-tl-none text-gray-200 leading-relaxed shadow-lg">
                <p>
                  Hello James! I have updated the blueprint for the master bath based on your feedback regarding the dual vanity
                  placement.
                </p>
                <p className="mt-2">Would you like to see the new 3D rendering?</p>
              </div>
            </div>
          </div>

          {/* User Message */}
          <div className="flex flex-col items-end gap-2 ml-auto max-w-2xl">
            <div className="bg-[#2A2D39] p-5 rounded-[2rem] rounded-tr-none text-white leading-relaxed shadow-md">
              <p>Yes, absolutely. I'm also curious about the marble finish options we discussed last week.</p>
            </div>
            <div className="text-xs text-slate-500 mr-1">Read 9:45 AM</div>
          </div>

          {/* AI Message with Attachment */}
          <div className="flex gap-4 max-w-3xl">
            <div className="size-10 rounded-full bg-gradient-to-br from-[#0df2f2]/20 to-transparent p-[1px] shrink-0 mt-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#0df2f2] text-sm">smart_toy</span>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="text-xs text-slate-500 ml-1">Apex AI</div>
              <div className="bg-[#21242D] border border-[#0df2f2]/20 p-5 rounded-[2rem] rounded-tl-none text-gray-200 leading-relaxed shadow-lg w-fit">
                <p className="mb-4">
                  Here are three high-end marble finish options available from our supplier. The "Carrara White" matches your
                  light fixtures perfectly.
                </p>

                {/* Image Grid */}
                <div className="grid grid-cols-3 gap-3 mb-2">
                  <div className="relative group rounded-xl overflow-hidden aspect-square cursor-zoom-in">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDEJY9e-eygI65Kxkx__WLLljEqSlw2Yuguy_ya-UaTWVVnUIyV8l9bAtzKSUelvqM9mA92-oDXThjNGK3lLHWyBCuLbSUZPkIVz0k4QUqekPN_xlWcvYuSMxTElSddqY_-Ca8yyrWk_fTWtMGZa4Nxugq-le0LnKt9twtRr_KeY8jYHqGq0Go6sY_YQNN3WdI9ahU3_2gS2tKUBJtbv2ghnUZOHC3CvMt2DlwGkvkabxLEX8JqQ4z-9oXiQUaBl9hJonrJKntZyxU')",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-medium">Carrara</span>
                    </div>
                  </div>
                  <div className="relative group rounded-xl overflow-hidden aspect-square cursor-zoom-in">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS_MCc96ZY9Hb9LtcqYvtVToB5TqmwsuRldZS47DTWyKlcv6O7819C6X5tzMgsuJt3od0SkCu-ZgEzrogmJymll-MnJkiOkqkYfiw8wutMPdsQsee9NWiFUTbLWhWyC1KCBnuZDx6w91j5ZpBtKkZVe5EeobuguXnFhNMsgwDvFpr1GRyZw8YsWhLeqMHxTKOw9aZRtXs7ya6WeHuR1B9UhPMxDUQ_ZjN4tHzwWRDjbc8gDfBotaScQPJUZwH-Oe88nbqIMR8e-JY')",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-medium">Nero</span>
                    </div>
                  </div>
                  <div className="relative group rounded-xl overflow-hidden aspect-square cursor-zoom-in">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0932U_pESfX7qsiEJTgGws3dWUpKvYx2NfiO0qJzJPwQpn1R6AXU1uS_V8dO8mxCEeJsHL0_mNacflZRti490PH5EFMYMCLrVZzkZPhDizfxJorfAhkvwQMTFQxka4Ef_7QTRIvTMdi9mOpvvGtihYOqdk0WXratJXMCrmLoQRprt2xOTk8__NWMIUqqDP2FLwdc5krQiyXaqpnyja3p_v5TWXB5UOTT9vFtlVj_gHAMuPld_y7aOq7XNQ5MVmaAdHxj4o7VWoEk')",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-xs font-medium">Grigio</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Typing Indicator */}
              <div className="ml-2 flex gap-1 mt-1">
                <span className="size-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                <span className="size-1.5 bg-slate-500 rounded-full animate-bounce delay-75"></span>
                <span className="size-1.5 bg-slate-500 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 pt-2 bg-gradient-to-t from-[#21242D] via-[#21242D] to-transparent">
          <div className="relative flex items-center bg-[#1A1D24] rounded-full p-2 pr-2 shadow-2xl border border-white/5 focus-within:border-[#0df2f2]/30 transition-colors">
            {/* Attachment Button */}
            <button className="size-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all ml-1 shrink-0">
              <span className="material-symbols-outlined -rotate-45">attach_file</span>
            </button>
            {/* Input */}
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-transparent border-none text-white placeholder-slate-500 focus:outline-none focus:ring-0 px-4 py-3 h-12"
            />
            {/* Voice/Mic Button */}
            <button className="size-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/5 transition-all mr-1 shrink-0">
              <span className="material-symbols-outlined">mic</span>
            </button>
            {/* Send Button */}
            <button className="h-10 px-6 bg-[#0df2f2] text-[#13151A] rounded-full font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(13,242,242,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group">
              <span>Send</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">send</span>
            </button>
          </div>
          <div className="text-center mt-3">
            <p className="text-[10px] text-slate-500 opacity-50">Apex AI can make mistakes. Verify important project details.</p>
          </div>
        </div>
      </main>

      {/* Global Scrollbar style can be added to globals.css, or inline via style block for edge cases, but we typically use tailwind scrollbar plugins if needed. */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #374151; 
            border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #4B5563; 
        }
      `,
        }}
      />
    </div>
  );
}
