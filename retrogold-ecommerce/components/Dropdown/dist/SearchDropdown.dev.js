"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SearchDropdown;

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("@/ Context/context");

var _link = _interopRequireDefault(require("next/link"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function SearchDropdown() {
  var _useGlobalContext = (0, _context.useGlobalContext)(),
      searchValues = _useGlobalContext.searchValues,
      isSearchValue = _useGlobalContext.isSearchValue,
      hideDropdown = _useGlobalContext.hideDropdown;

  console.log(searchValues); //   const content = (
  //     <>
  //       {searchValues && searchValues.length > 0 ? (
  //         <div className='p-2'>
  //           <h1 className='text-sm'>Search Results</h1>
  //           <ul>
  //             {searchValues?.map((values, index) => (
  //               <li key={index} onClick={hideDropdown}>
  //                 <Link href={`/blog/${values.slug.current}`}>
  //                   <p>{values.title}</p>
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       ) : (
  //         <div className='p-2'>
  //           <p>No search results found.</p>{" "}
  //         </div>
  //       )}
  //     </>
  //   );
  //     if (!isSearchValue) return null;
  //   return (
  //         <div className="flex justify-center">
  //         <Dropdown
  //         isVisible={isSearchValue}
  //         content={content}
  //         styleClass="w-96 bg-white absolute z-10 top-16 rounded-lg h-48 text-zinc-800"
  //         />
  //         </div>
  //   )
}
//# sourceMappingURL=SearchDropdown.dev.js.map
