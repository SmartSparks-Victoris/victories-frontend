// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { expect, vi } from 'vitest'; // Ensure this import is present
import '@testing-library/jest-dom'; // This automatically extends expect

const mockPush = vi.fn();

vi.mock('nextjs-toploader/app', () => ({
  useRouter: vi.fn().mockReturnValue({
    push: mockPush,
  }),
}));

