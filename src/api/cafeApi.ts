import supabase from '@/lib/supabase';
import type { Cafe, CafeResponse } from '@/types/cafe';

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
}): Promise<CafeResponse> => {
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

const fetchCafeById = async (id: number): Promise<Cafe> => {
  const { data, error } = await supabase
    .from('cafes')
    .select(
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
    `
    )
    .eq('id', id)
    .single();

  if (error) throw error;

  return data;
};

export const cafeApi = {
  fetchCafeList,
  fetchCafeById,
};
