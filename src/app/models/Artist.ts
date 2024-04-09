//interface for Artist
export interface Artist {
    artist_id: number;
    name: string;
    dob: Date;
    gender: 'Female' | 'Male' | 'Unspecified';
    artwork_type: string;
    contact_info: string;
    exhibition_date: Date;
    specialNotes: string;
    is_featured_artists: number;
}