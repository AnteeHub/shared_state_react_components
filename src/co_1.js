import React, { useEffect, useState } from "react";

export default function Com1(props) {
  const [content, setContent] = useState(props.con);
  useEffect(() => {
    console.log("first loading.");
    setContent(11);
    return () => {
      console.log("only 1 unload");
    };
  }, []);

  useEffect(() => {
    console.log("did update");
    console.log("updating", content);
    setContent(props.con);
    return () => {
      console.log("update unload");
    };
  }, [props.con]);

  return <h1>Com1:{content}</h1>;
}
