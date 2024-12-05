import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabase: SupabaseClient = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

const update = async (data: object, id: unknown) => {
    try {
        const { data: updatedData, error } = await supabase
            .from('item')
            .upsert({ id, ...data }) 
            .select();

        if (error) {
            throw error;
        }
        return updatedData;
    } catch (err: any) {
        console.error("Error updating item:", err.message);
        return null;
    }
};

const drop = async (id: unknown) => {
    try {
        const { error } = await supabase
            .from('item')
            .delete()
            .eq('id', id);

        if (error) {
            throw error;
        }
        return true;
    } catch (err) {
        console.error("Error deleting item:", err.message);
        return false;
    }
};

const get = async (id:string) => {
    try {
        const { data, error } = await supabase
            .from('item')
            .select()
            .eq('id', id); 

        if (error) {
            throw error;
        }
        return data;
    } catch (err) {
        console.error("Error fetching item:", err.message);
        return null;
    }
};

const list = async () => {
    try {
        const { data, error } = await supabase
            .from('item')
            .select()
            .order('created_at', { ascending: false }); 

        if (error) {
            throw error;
        }
        return data;
    } catch (err) {
        console.error("Error listing items:", err.message);
        return [];
    }
};

const save = async (data) => {
    try {
        const { data: savedData, error } = await supabase
            .from('item')
            .insert(data)
            .select();

        if (error) {
            throw error;
        }
        return savedData;
    } catch (err) {
        console.error("Error saving item:", err.message);
        return null;
    }
};

export { update, drop, get, list, save };
