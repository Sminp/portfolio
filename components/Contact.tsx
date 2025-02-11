export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <div className="space-y-6">
        <div className="flex items-center justify-center space-x-6">
          <a
            href="mailto:0102262@gmail.com"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
          >
            <span className="text-lg">📧</span>
            <span>0102262@gmail.com</span>
          </a>
          <a
            href="https://github.com/Sminp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
          >
            <span className="text-lg">GitHub</span>
          </a>
          <a
            href="https://aster-code.tistory.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600"
          >
            <span className="text-lg">Blog</span>
          </a>
        </div>
      </div>
    </div>
  );
}
