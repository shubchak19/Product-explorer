export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex gap-4 flex-col sm:flex-row justify-between items-center">
        <img src="https://placehold.co/80x30" alt="company logo"></img>
        <ul className="flex sm:flex-row flex-col space-x-6">
          <li>
            <a href="#" className="hover:underline text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-sm">
              Product
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
