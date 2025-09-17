import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types for our database
export interface AlumniProfile {
  id?: string
  first_name: string
  last_name: string
  email: string
  phone?: string
  graduation_year: string
  department: string
  profession?: string
  company?: string
  location?: string
  linkedin?: string
  interests: string[]
  newsletter: boolean
  created_at?: string
  updated_at?: string
}

// Function to save alumni registration
export async function saveAlumniRegistration(data: AlumniProfile) {
  try {
    const { data: result, error } = await supabase
      .from('alumni_profiles')
      .insert([data])
      .select()

    if (error) {
      throw error
    }

    return { success: true, data: result }
  } catch (error) {
    console.error('Error saving alumni registration:', error)
    return { success: false, error }
  }
}

// Function to get all alumni
export async function getAllAlumni() {
  try {
    const { data, error } = await supabase
      .from('alumni_profiles')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error fetching alumni:', error)
    return { success: false, error }
  }
}

// Function to search alumni
export async function searchAlumni(searchTerm: string, filters: any = {}) {
  try {
    let query = supabase
      .from('alumni_profiles')
      .select('*')

    if (searchTerm) {
      query = query.or(`first_name.ilike.%${searchTerm}%,last_name.ilike.%${searchTerm}%,profession.ilike.%${searchTerm}%,company.ilike.%${searchTerm}%`)
    }

    if (filters.batch) {
      query = query.eq('graduation_year', filters.batch)
    }

    if (filters.location) {
      query = query.ilike('location', `%${filters.location}%`)
    }

    if (filters.profession) {
      query = query.ilike('profession', `%${filters.profession}%`)
    }

    const { data, error } = await query.order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error searching alumni:', error)
    return { success: false, error }
  }
}
