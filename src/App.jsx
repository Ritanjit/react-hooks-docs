import React from 'react';
import './App.css'

const hooksData = [
  {
    name: '1. useState()',
    description:
      'Allows you to add state to functional components. It returns a stateful value and a function to update it.',
    example: `const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Click me
</button>`
  },
  {
    name: '2 useEffect()',
    description:
      'Performs side effects in functional components. Can run after render, or conditionally based on dependencies.',
    example: `useEffect(() => {
  document.title = \`\${count} new messages!\`;
}, [count]);`
  },
  {
    name: '3. useContext',
    description:
      'Accesses context values in your component, useful for sharing data without prop drilling.',
    example: `const theme = useContext(ThemeContext);`
  },
  {
    name: '4. useRef',
    description:
      'Returns a mutable ref object whose .current property is initialized to the passed argument.',
    example: `const inputRef = useRef(null);

<input ref={inputRef} />`
  },
  {
    name: '5. useMemo',
    description:
      'Memoizes a calculated value so it only recalculates when dependencies change.',
    example: `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
  },
  {
    name: '6. useCallback',
    description:
      'Returns a memoized version of the callback that only changes if one of the dependencies has changed.',
    example: `const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);`
  }
];

const App = () => {
  return (
    <div style={{ fontFamily: 'monospace', background: '#111', color: '#0f0', minHeight: '100vh', padding: '2rem',borderRadius:'10px', textAlign:'left' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>🕹️ React Hooks Docs</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
        {hooksData.map((hook, index) => (
          <div
            key={index}
            style={{
              border: '2px solid #0f0',
              padding: '1rem',
              borderRadius: '10px',
              background: '#000',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h2 style={{ color: '#0ff' }}>{hook.name}</h2>
              <p style={{ fontSize: '0.9rem' }}>{hook.description}</p>
            </div>
            <pre
              style={{
                marginTop: '1rem',
                backgroundColor: '#222',
                padding: '1rem',
                borderRadius: '5px',
                overflowX: 'auto',
                color: '#fff',
                fontSize: '0.85rem',
              }}
            >
              <code>{hook.example}</code>
            </pre>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
