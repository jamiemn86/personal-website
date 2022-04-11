import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header/>
      <div className="max-w-lg sm:mx-auto sm:text-center text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto">
                <p className="leading-relaxed mt-2 text-[15px]">
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
      <Footer/>
    </>
  );
}

export default App;
