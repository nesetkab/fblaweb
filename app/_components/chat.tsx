'use client';

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ChatSupport() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    // Simulate a bot response after a delay
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: 'Thank you for reaching out! How can I assist you?', sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isOpen && (
        <Card className="w-80 shadow-lg rounded-lg border border-gray-300 bg-white">
          <div className="flex justify-between items-center p-3 border-b border-gray-200">
            <span className="font-semibold">Customer Support</span>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X size={20} />
            </Button>
          </div>
          <CardContent className="h-64 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm max-w-[75%] ${
                  msg.sender === 'user' ? 'ml-auto bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </CardContent>
          <div className="p-3 border-t border-gray-200 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1"
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </div>
        </Card>
      )}
      <Button
        className="w-24 h-24 rounded-full shadow-lg bg-blue-600 text-white flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle size={48} className=''/>
      </Button>
    </div>
  );
}
