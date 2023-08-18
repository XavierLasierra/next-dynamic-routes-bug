export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale,
    },
  };
};

export default function Dynamic({ locale }) {
  return <div>Locale: {locale}</div>;
}
