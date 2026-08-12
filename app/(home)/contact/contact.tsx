import ContactForm from "./components/contact-form";
import ProcessSteps from "./components/process-steps";

const Contact = () => {
  return (
    <section id="contato" className="flex flex-col gap-10">
      <div className="grid lg:grid-cols-[2fr_3fr] grid-cols-1 gap-10 items-start">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="subheadline">Entre em contato.</span>
            <h1 className="text-4xl">Venha discutir conosco a sua ideia</h1>
          </div>
          <ContactForm />
        </div>
        <div className="flex flex-col gap-10">
          <span>
            Tem alguma dúvida, sugestão ou quer saber mais sobre nossos produtos
            e serviços? Nossa equipe está pronta para te atender. Preencha o
            formulário abaixo ou entre em contato diretamente por telefone ou
            e-mail — retornamos o mais breve possível.
          </span>
          <div className="w-full max-w-md min-w-0">
            <ProcessSteps />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
