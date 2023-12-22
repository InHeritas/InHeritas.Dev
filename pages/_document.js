import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script type="module" src="https://ryj9d86xjh.execute-api.ap-northeast-2.amazonaws.com/v1/api/fontstream/djs/?sid=gAAAAABkdUt-7O7BL6uR0fYqvxMIchs6KNCQVUp924pT2YaH9_V3IMQtHqHN72hAPhIqooO5hT2s2VROhCrzUfBlPyrN-ORbmgo6MJqCkSB0ipc9at_rg6s9AwXVJVU9ZFA7hco6wwBB4AIwX_2q_rsSDipqvIBKpNqgTWmQq1GV8qlteBEGUYot5ldhjEGfc-PcftnzfBjYIjKT1ICTOsoGmCP5kqYpk-boQU7mvc8Eos5pvV_AH1FEqyzx6FvMmRHrEWqHrziu" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
