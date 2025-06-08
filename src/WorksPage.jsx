import { Link } from 'react-router-dom';

function WorksPage() {
  return (
    <div>
      <h2>🎨 作品一覧</h2>
      <ul>
        <li><Link to="/work1">作品1</Link></li>
        <li><Link to="/work2">作品2</Link></li>
      </ul>
    </div>
  );
}

export default WorksPage;