import React, { useEffect, useState } from "react";

const useDocumentTitle = (title:string) => {
    const [documentTitle, setDoucmentTitle] = useState<string>(title) ;
   useEffect(() => {
    document.title = `GMtoolkit - ${title}`; 
  },[title]);

  return [documentTitle, setDoucmentTitle] as const;
};

export {useDocumentTitle};