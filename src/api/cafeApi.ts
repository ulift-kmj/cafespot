import type { Cafe } from '@/types/cafe';
import supabase from '@/lib/supabase';

const fetchCafeList = async ({
  page,
  pageSize,
  query,
  summary,
}: {
  page: number;
  pageSize: number;
  query?: string;
  summary?: string;
}): Promise<{ data: Cafe[]; nextPage: number | null }> => {
  const from = page * pageSize;
  const to = from + pageSize - 1;

  let supabaseQuery = supabase.from('cafes').select(
    `
      *,
      photos (
        url
      ),
      summaries!inner (
        summary_type,
        is_available
      ),
      facilities (
        facility_type,
        is_available
      )
    `,
    { count: 'exact' }
  );

  if (query) {
    supabaseQuery = supabaseQuery.or(
      `name.ilike.%${query}%,address.ilike.%${query}%`
    );
  }

  if (summary) {
    supabaseQuery = supabaseQuery
      .eq('summaries.summary_type', summary)
      .eq('summaries.is_available', true);
  }

  const { data, error, count } = await supabaseQuery
    .order('created_at', { ascending: false })
    .range(from, to);

  if (error) throw error;

  const nextPage = count && from + pageSize < count ? page + 1 : null;

  return {
    data,
    nextPage,
  };
};

export const cafeApi = {
  fetchCafeList,
};
