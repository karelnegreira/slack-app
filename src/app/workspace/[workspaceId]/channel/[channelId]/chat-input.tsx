import dynamic from 'next/dynamic';
import Quill from 'quill';
import { useRef } from 'react';

import { EmojiProvider } from '@/components/emoji-popover';


const Editor = dynamic(() => import("@/components/editor"), {ssr: false});

interface ChatInputProps {
    placeholder: string;
}

const ChatInput = ({placeholder}: ChatInputProps) => {

    const editorRef = useRef<Quill | null>(null)

  return (
    <div className="px-5 w-full">
      <Editor 
        
        placeholder={placeholder}
        onSubmit={() => {}}
        disabled={false}
        innerRef={editorRef}
      /> 
    </div>
  )
}

export default ChatInput;
