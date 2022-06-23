import { useState, useEffect } from "react";
// import {useDebounce} from 'use-debounce'
import lunr from 'lunr';

import allExercises from '../data/all-exercises.json';
import searchIndexData from '../data/search-index.json';
import toast from "react-hot-toast";

const searchIndex = lunr.Index.load(searchIndexData)

export default function SearchBox({ setExercises }) {

  const [searchTerm, setSearchTerm] = useState("");
  useEffect(
    () => {
      try {
        let result = searchIndex.search(searchTerm);
        result = result.map((r) => allExercises.find((it) => it.slug === r.ref));
        setExercises(result);
      } catch(e) {
        console.error(e.message)
        toast.error(e.message)
      }
    }
  , [searchTerm])

  // useEffect(
  //   () => {
  //     if (debouncedSearchTerm) {

  //       try {
  //         const exercises = searchIndex.search(searchTerm);
  //         setExercises(exercises);
  //       } catch (e) {
  //         console.log(e)
  //       }
  //     } else {
  //       setExercises(allExercises);
  //     }
  //   },
  //   [debouncedSearchTerm] // Only call effect if debounced search term changes
  // );

  return (
    <div className="flex items-center justify-center">
      <div className="flex border-2 rounded">
        <input
          type="text"
          className="px-4 py-2 w-80"
          placeholder="Buscar..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="flex items-center justify-center px-4 border-l">
          <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
