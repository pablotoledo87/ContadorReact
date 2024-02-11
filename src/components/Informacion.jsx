const Informacion = (props) => {
  return (
    <section>
      {/* aqui va todo el maquetado del componente */}
      <h2>Conceptos de react {props.comision}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero et, non,
        eveniet obcaecati sed assumenda ea sint nisi accusantium, corrupti
        impedit rerum. Sequi officiis molestias enim recusandae esse aliquam
        natus quo dolor fugiat quisquam atque, ut inventore sunt nisi quas ipsum
        necessitatibus suscipit, repellendus nam quidem similique veniam itaque
        eum! <br/> comision: {props.anioActualProps}
      </p>
    </section>
  );
};

export default Informacion;
