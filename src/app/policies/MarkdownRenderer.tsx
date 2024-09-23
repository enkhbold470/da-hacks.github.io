"use client";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./Markdown.css";
import { ankaCoder } from "@/utils/font";

interface MarkdownRendererProps {
  filePath: string;
}

const MarkdownRenderer = ({ filePath }: MarkdownRendererProps) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(filePath)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error(error));
  }, [filePath]);

  return (
    <div>
      <ReactMarkdown
        className={`markdown-content `}
        remarkPlugins={[remarkGfm]}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
