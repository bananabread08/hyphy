import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// mock window.scrollTo
const windowMock = {
  scrollTo: vitest.fn(),
}

Object.assign(global, global, windowMock)

// mock resizeOberver
const ResizeObserverMock = vi.fn(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))
// Stub the global ResizeObserver
vi.stubGlobal('ResizeObserver', ResizeObserverMock)

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
