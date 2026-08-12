import ContactForm from "./components/contact-form";
import ProcessSteps from "./components/process-steps";

const Contact = () => {
  return (
    <section id="contato" className="flex flex-col gap-10">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 items-start">
        <div className="flex flex-col gap-2 order-1 lg:order-0  lg:col-start-1 lg:row-start-1">
          <span className="subheadline">Entre em contato.</span>
          <h1 className="text-4xl">Venha discutir conosco a sua ideia</h1>
        </div>

        <span className="order-2 lg:order-0  lg:col-start-2 lg:row-start-1">
          Tem alguma dúvida, sugestão ou quer saber mais sobre nossos produtos e
          serviços? Nossa equipe está pronta para te atender. Preencha o
          formulário abaixo ou entre em contato diretamente por telefone ou
          e-mail — retornamos o mais breve possível.
        </span>

        <div className="order-3 lg:order-0  lg:col-start-1 lg:row-start-2">
          <ContactForm />
        </div>

        <div className="w-full max-w-md min-w-0 order-4 lg:order-0 lg:col-start-2 lg:row-start-2">
          <ProcessSteps />
        </div>
      </div>
    </section>
  );
};

export default Contact;
