import { FormEvent, useState } from 'react';
import { roastResume } from '../api/client';

export function Home() {
  const [resumeText, setResumeText] = useState('');
  const [targetRole, setTargetRole] = useState('');
  const [roastLevel, setRoastLevel] = useState('medium');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError('');
    setResult('');
    try {
      const response = await roastResume({
        resumeText,
        targetRole,
        roastLevel,
      });
      setResult(response.roast);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="card">
        <h1>AI Resume Roaster</h1>
        <p className="subtitle">Milestone 1 frontend boilerplate for resume roast flow.</p>

        <form onSubmit={handleSubmit} className="form">
          <label>
            Resume text placeholder
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder="Paste resume text here for now..."
              rows={8}
            />
          </label>

          <label>
            Target role (optional)
            <input
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value)}
              placeholder="e.g. Backend Engineer"
            />
          </label>

          <label>
            Roast level
            <select value={roastLevel} onChange={(e) => setRoastLevel(e.target.value)}>
              <option value="mild">Mild</option>
              <option value="medium">Medium</option>
              <option value="spicy">Spicy</option>
              <option value="savage">Savage</option>
            </select>
          </label>

          <button type="submit" disabled={loading}>
            {loading ? 'Generating roast...' : 'Generate mock roast'}
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {result && (
          <div className="result">
            <h2>Roast output</h2>
            <p>{result}</p>
          </div>
        )}
      </section>
    </main>
  );
}
