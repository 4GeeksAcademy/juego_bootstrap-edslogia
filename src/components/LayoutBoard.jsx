// src/components/LayoutBoard.jsx
import { useAppStore } from '../store/useAppStore';
import "../styles/layout-board.css"

export default function LayoutBoard() {
  const { layout } = useAppStore();

  return (
    <div className="layout" >

    </div>
  );
}
