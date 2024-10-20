import { CodeiumEditor, Document, Language } from "@codeium/react-code-editor";

export const Codeium = () => {
  const html = `<html>
  <body>
    <h1>Contact Us</h1>
    <form>
      <label>Name:</label>
      <input id="name" type="text" />
      <label>Email:</label>
      <input id="email" type="text" />
    </form>
  </body>
</html>`;

  return (
    <div>
      <CodeiumEditor
        language="javascript"
        theme="vs-dark"
        otherDocuments={[
          new Document({
            absolutePath: "/app/index.html",
            relativePath: "index.html",
            text: html,
            editorLanguage: "html",
            language: Language.HTML,
          }),
        ]}
      />
    </div>
  );
};

export default Codeium;