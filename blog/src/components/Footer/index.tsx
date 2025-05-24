export function Footer() {
  return (
    <footer className="text-gray-300 py-12">
      <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} NextCourses Blog. Todos os direitos
          reservados.
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="/privacy"
            className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            Privacidade
          </a>
          <a
            href="/terms"
            className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            Termos
          </a>
          <a
            href="/cookies"
            className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
