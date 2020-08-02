const useCleanWhitespaces = string => string.replace(/\s+/g, ' ').replace(/(^\s*)/g, '');

export default useCleanWhitespaces;