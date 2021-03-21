/* import MySQL from '../mysql/mysql';

function selectMnuPeriodoAnual<T>(valId: number, valResult: string): T {
  const query = `
    select ${valResult}
    from mnu_periodo_anual 
    where IC = ${valId}`;

  MySQL.ejecutarQuery(query, (err: any, periodo: T) => {
    if (err) {
        throw new Error("No se encontro registro")        
    } else {
      return periodo
    }
  });
}
 */