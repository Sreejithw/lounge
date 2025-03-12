import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="h-16 border-b flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl font-semibold">My App</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link
                to="/"
                className={cn(
                  'hover:bg-gray-100',
                  pathname === '/' && 'bg-gray-100'
                )}
              >
                Widgets
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link
                to="/reports"
                className={cn(
                  'hover:bg-gray-100',
                  pathname === '/reports' && 'bg-gray-100'
                )}
              >
                React Projects
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link
                to="/analytics"
                className={cn(
                  'hover:bg-gray-100',
                  pathname === '/analytics' && 'bg-gray-100'
                )}
              >
                JS Projects
              </Link>
            </Button>
          </div>

        <div className="flex items-center gap-2">
          <Button variant="outline">Profile</Button>
          <Button variant="outline">Notifications</Button>
        </div>
      </div>
    </header>
  );
}