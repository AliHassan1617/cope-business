import { Card } from './Card';
import './StatCard.css';

export default function StatCard({ icon, label, value, accent = 'green' }) {
  return (
    <Card className={`stat-card stat-${accent}`}>
      <div className="stat-content">
        <div className="stat-icon">{icon}</div>
        <div className="stat-info">
          <p className="stat-label">{label}</p>
          <p className="stat-value">{value}</p>
        </div>
      </div>
    </Card>
  );
}
