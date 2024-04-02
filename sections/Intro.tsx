export default function Intro() {
  return (
    <div
      class="bg-[#0D0D0D] min-h-[450vh] relative text-stone-100 text-3xl grid-cols-12 pt-16"
      style={{
        boxShadow: `0 -1vw 50vw 10vw rgba(13, 13, 13, 1)`,
      }}
    >
      <div data-aos="fade-up" class="max-w-5xl m-auto text-center">
        <p>
          The epic science fiction film produced and directed by Stanley Kubrick
          in 1968 entered the ranks of the best in the genre with its
          scientifically accurate portrayal of space travel and its effects.
          Kubrick explores themes such as evolution, technology, artificial
          intelligence and extraterrestrial life in this dazzling mystifying
          journey throughout outer space and human nature.
        </p>
      </div>
      <img
        src="/still-1.jpg"
        class="mt-24 px-20 w-full max-w-[96rem] m-auto box-border"
      />
    </div>
  );
}
