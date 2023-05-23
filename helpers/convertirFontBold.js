export const convertirNegritas = (texto) => {
    const partes = texto.split('**');
    return partes.map((parte, index) => {
      if (index % 2 === 1) {
        return <strong key={index}>{parte.toString()}</strong>;
      } else {
        return parte;
      }
    });
};