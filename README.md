# Chat with File Upload - Setup Instructions

## Configuration

To use a specific assistant ID with this application, follow these steps:

1. Add your OpenAI API key and Assistant ID to the `.env` file in the root of the project:

```
OPENAI_API_KEY=your_openai_api_key_here
EXISTING_ASSISTANT_ID=your_assistant_id_here
```

2. If you have already uploaded files to a specific assistant, using that assistant's ID will allow users to access those files through the chat interface.

3. If no `EXISTING_ASSISTANT_ID` is provided, the application will create a new assistant each time the server is restarted.

## Using File Uploads

The chat interface supports uploading PDF files that the AI assistant can reference when answering questions.

1. Click the chat button in the bottom right corner of the screen
2. In the chat dialog, use the file upload section to upload a PDF document
3. After uploading, the assistant will confirm it can access the document
4. You can then ask questions about the content of the PDF

## Technical Details

- Files are securely stored on OpenAI's servers and associated with your assistant
- Each user gets a unique conversation thread that persists across sessions
- Uploaded files are available for retrieval by the assistant when answering questions
- The system logs the assistant ID when creating or using an existing assistant