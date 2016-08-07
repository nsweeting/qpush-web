export class Job {
  klass: string;
  id: string;
  priority: number;
  created_at: number;
  start_at: number;
  cron: string;
  retry_max: number;
  total_fail: number;
  total_success: number;
  args: any;
  perform_at: number;
}
