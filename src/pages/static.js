export const getServerSideProps = async ({ locale }) => {
  return {
    props: {
      locale,
    },
  };
};

export default function Static({ locale }) {
  return <div>Locale: {locale}</div>;
}
