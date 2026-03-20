export default function TerminalInstall() {
  const command = 'curl https://doumi.Jayer7.kr/install.sh | bash';

  return (
    <div className="overflow-hidden rounded-lg bg-[#1A1A1A] font-mono text-left text-white">
      <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
      </div>
      <div className="p-4">
        <span className="text-gray-400">$ </span>
        <code className="break-all text-sm text-white sm:text-base">
          {command}
        </code>
      </div>
    </div>
  );
}
