import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ScrollManager } from './components/ScrollManager.jsx'
import { SiteLayout } from './components/SiteLayout.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ProfilePage } from './pages/ProfilePage.jsx'
import { SkillsPage } from './pages/SkillsPage.jsx'
import { SystemDetailPage } from './pages/SystemDetailPage.jsx'
import { SystemsPage } from './pages/SystemsPage.jsx'
import { WorkflowDetailPage } from './pages/WorkflowDetailPage.jsx'
import { WorkflowsPage } from './pages/WorkflowsPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="systems" element={<SystemsPage />} />
          <Route path="systems/:slug" element={<SystemDetailPage />} />
          <Route path="ai-workflows" element={<WorkflowsPage />} />
          <Route path="ai-workflows/:slug" element={<WorkflowDetailPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

