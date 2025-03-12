import { JSX, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type MenuItem = {
  title: string;
  icon: JSX.Element;
  link?: string;
  subItems?: MenuItem[];
};

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [expandedItem, setExpandedItem] = useState<string>();

  const menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      icon: <span>🏠</span>,
      link: '/',
    },
    {
      title: 'Settings',
      icon: <span>⚙️</span>,
      subItems: [
        { title: 'Profile', icon: <span>👤</span>, link: '/settings' },
        { title: 'Security', icon: <span>🔒</span>, link: '/security' },
      ],
    },
  ];

  return (
    <aside className={`h-full border-r ${isOpen ? 'w-64' : 'w-16'} transition-all`}>
      <div className="flex flex-col h-full p-2">
        <Button
          variant="ghost"
          size="sm"
          className="self-end mb-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </Button>

        <Accordion
          type="single"
          collapsible
          value={expandedItem}
          onValueChange={setExpandedItem}
          className="space-y-2"
        >
          {menuItems.map((item, index) => (
            <AccordionItem value={item.title} key={index} className="border-none">
              {item.subItems ? (
                <>
                  <AccordionTrigger
                    className={`p-2 hover:bg-gray-100 rounded ${!isOpen && 'justify-center'}`}
                  >
                    <div className="flex items-center gap-2">
                      {item.icon}
                      {isOpen && item.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-6 pt-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.link || '#'}
                        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                      >
                        {subItem.icon}
                        {isOpen && subItem.title}
                      </Link>
                    ))}
                  </AccordionContent>
                </>
              ) : (
                <Link
                  to={item.link || '#'}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
                >
                  {item.icon}
                  {isOpen && item.title}
                </Link>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </aside>
  );
}