import React, { useState } from 'react';
import ShowcaseText from './ShowcaseText';
import { backend } from '../../src/declarations/backend';

const NameInput = () => {
  const [greeting, setGreeting] = useState(null);
  const [name, setName] = useState('');
  const [submittedNames, setSubmittedNames] = useState([]);
  const [showNames, setShowNames] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const newGreeting = await backend.greet(name);
      setGreeting(newGreeting);
      setError(null);
    } catch (err) {
      console.error('Error submitting name:', err);
      setError('Failed to submit name. Please try again.');
    }
    return false;
  }

  async function handleShowNames() {
    try {
      const names = await backend.getSubmittedNames();
      setSubmittedNames(names);
      setShowNames(true);
      setError(null);
    } catch (err) {
      console.error('Error fetching names:', err);
      setError('Failed to fetch names. Please try again.');
    }
  }

  function handleGoBack() {
    setName('');
    setGreeting(null);
    setShowNames(false);
  }

  return (
    <div className="bg-dark-infinite flex h-full w-full items-center justify-center rounded px-4 py-8 font-sans text-black">
      <div className="relative w-full max-w-md">
        {!greeting && !showNames ? (
          <Card className="relative h-full w-full shadow-2xl shadow-blue-500/20">
            <form onSubmit={handleSubmit} className="bg-infinite rounded-lg p-6">
              <div className="bg-meteorite mb-4 flex items-center p-4">
                <h1 className="mr-2 text-xl font-medium text-black">Enter Your Name</h1>
              </div>
              <p className="mb-4 text-black">Please enter your name below and click submit.</p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e?.target?.value)}
                placeholder="Enter your name"
                className="mb-4 w-full rounded-md border-2 bg-white px-3 py-2 text-gray-700 placeholder-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-300"
                required
              />
              <div className="flex flex-col gap-2">
                <button
                  type="submit"
                  className="bg-picton-blue hover:bg-picton-blue focus:ring-picton-blue hover:shadow-picton-blue/30 w-full rounded-md px-3 py-4 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-opacity-50"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleShowNames}
                  className="bg-meteorite hover:bg-meteorite/90 focus:ring-meteorite w-full rounded-md px-3 py-4 font-semibold text-black shadow-lg transition duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-opacity-50"
                >
                  Show All Names
                </button>
              </div>
            </form>
          </Card>
        ) : (
          <Card className="backface-hidden h-full w-full transform rounded-xl shadow-2xl shadow-blue-500/20 transition-opacity duration-500">
            <div className="bg-infinite flex h-full w-full flex-col items-center justify-center rounded-[20px] px-4 py-12">
              {greeting && <h2 className="mb-4 text-3xl font-medium text-black">{greeting}</h2>}
              {showNames && (
                <div className="mb-6">
                  <h2 className="mb-4 text-2xl font-medium text-black">Submitted Names:</h2>
                  <ul className="list-disc pl-5">
                    {submittedNames.map((name, index) => (
                      <li key={index} className="text-black">{name}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button
                onClick={handleGoBack}
                className="bg-picton-blue focus:ring-picton-blue hover:bg-picton-blue hover:shadow-picton-blue/30 rounded-md px-4 py-2 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-opacity-50"
              >
                Go Back
              </button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

const Card = ({ greeting, className, children }) => (
  <div className={`${className} ${greeting ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'}`}>
    {children}
  </div>
);

const ExampleForm = () => {
  return (
    <div className="mx-auto my-12 max-w-4xl">
      <h1 className="mb-6 text-3xl font-medium">Hello, world! </h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="border-black-200 flex flex-col border p-4">
          <div className="flex-grow overflow-auto">
            <ShowcaseText />
          </div>
        </div>
        <div className="bg-black-200 flex flex-col rounded-lg p-8">
          <h2 className="mb-6 text-2xl font-semibold">🙏</h2>
          <NameInput />
        </div>
      </div>
    </div>
  );
};

export default ExampleForm;
