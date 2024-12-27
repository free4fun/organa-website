import { useState } from 'react';

export const useNewsletter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const subscribe = async (email: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Aquí iría la lógica de suscripción real
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulación
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, error };
};