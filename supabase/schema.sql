-- LoveRedFlags.com Supabase Schema
-- 실행 방법: Supabase Dashboard → SQL Editor → 아래 코드 실행

-- 결과 통계 테이블
CREATE TABLE IF NOT EXISTS test_results (
  id BIGSERIAL PRIMARY KEY,
  result_type VARCHAR(10) NOT NULL,
  language VARCHAR(5) NOT NULL,
  level INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_results_type ON test_results(result_type);
CREATE INDEX IF NOT EXISTS idx_results_language ON test_results(language);
CREATE INDEX IF NOT EXISTS idx_results_created ON test_results(created_at DESC);

-- Row Level Security (익명 INSERT 허용, SELECT는 aggregate만)
ALTER TABLE test_results ENABLE ROW LEVEL SECURITY;

-- 익명 사용자가 INSERT 가능
CREATE POLICY "Allow anonymous insert" ON test_results
  FOR INSERT WITH CHECK (true);

-- 익명 사용자가 SELECT count(*) 가능 (통계 표시용)
CREATE POLICY "Allow anonymous select" ON test_results
  FOR SELECT USING (true);

-- 통계 뷰 (선택사항, 대시보드용)
CREATE OR REPLACE VIEW result_stats AS
SELECT
  result_type,
  COUNT(*) as count,
  ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER (), 2) as percentage
FROM test_results
GROUP BY result_type
ORDER BY count DESC;
