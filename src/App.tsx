import './App.css';

import { Header } from './components/header';
import { AbortControllerComponent } from './components/abort-controller';

const App = () => (
  <>
    <Header />

    <div className="px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-10 sm:py-15 lg:py-15">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Example how we use AbortController
          </h1>

          <p className="mt-10">
            AbortController generate a signal compatible with axios and fetch
            API that allow us cancel a previous request generate.
          </p>
        </div>
      </div>
    </div>

    <AbortControllerComponent />
  </>
);

export { App };
