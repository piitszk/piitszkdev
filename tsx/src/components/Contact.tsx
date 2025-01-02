import { useState } from "react"
import { Mail, MessageSquare, CheckCircle } from "lucide-react"

export const Contact = () => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("piitszk").then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    })
  } 

  return (
    <section id="contact" className="py-20 select-none">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="animated-border">
            <div className="animated-border-content p-8 text-center">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Entre em Contato
              </h2>
              <p className="text-zinc-400 mb-8">
                Interessado em trabalhar junto? Vamos discutir seu projeto e ver como posso ajudar.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:luan@piitszkdev.com"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors w-full sm:w-auto justify-center"
                >
                  <Mail size={20} />
                  Me envie um email
                </a>
                <button
                  onClick={handleCopy}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg ${
                    copied ? "bg-green-600" : "bg-zinc-800 hover:bg-zinc-700"
                  } text-white transition-colors w-full sm:w-auto justify-center`}
                >
                  {copied ? (
                    <>
                      <CheckCircle size={20} />
                      Copiado!
                    </>
                  ) : (
                    <>
                      <MessageSquare size={20} />
                      Discord
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};