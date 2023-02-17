import { Footer } from '../footer';
import { Notification } from '../notification';

export function Layout(props) {
  const { children, previewEnabled = false } = props;

  return (
    <>
      <div className="flex flex-col gap-16">
        {previewEnabled && <Notification />}
        <div className="container max-w-screen-xl mx-auto md:px-5 flex flex-col gap-8 min-h-screen">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
