import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './services/interceptor.interceptor';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { IntroComponent } from './pages/intro/intro.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { BloopersComponent } from './pages/bloopers/bloopers.component';
import { AudiovisualComponent } from './pages/audiovisual/audiovisual.component';
import { DeveloperComponent } from './pages/developer/developer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SamplesComponent } from './pages/samples/samples.component';
import { PlusComponent } from './pages/plus/plus.component';
import { LinksComponent } from './pages/links/links.component';
import { DataComponent } from './pages/data/data.component';
import { WhiteBrandComponent } from './components/navbar/brand/white/white.component';
import { CameraComponent } from './components/sidebars/left/camera/camera.component';
import { CodeComponent } from './components/sidebars/left/code/code.component';
import { BlackBackComponent } from './components/footer/left/black/back/back.component';
import { BugComponent } from './components/footer/right/white/bug/bug.component';
import { WhiteFastForwardComponent } from './components/footer/right/white/fast-forward/fast-forward.component';
import { BlackFastForwardComponent } from './components/footer/right/black/fast-forward/fast-forward.component';
import { MinibioComponent } from './modals/audiovisual/minibio/minibio.component';
import { IWantComponent } from './modals/audiovisual/i-want/i-want.component';
import { MyWorkComponent } from './modals/audiovisual/my-work/my-work.component';
import { WhitePlusComponent } from './components/sidebars/left/plus/white/white.component';
import { WhiteBackComponent } from './components/footer/left/white/back/white-back.component';
import { BlackSessionComponent } from './components/navbar/session/black/black.component';
import { WhiteSessionComponent } from './components/navbar/session/white/white.component';
import { BlackPlusComponent } from './components/sidebars/left/plus/black/black.component';
import { BlackBrandComponent } from './components/navbar/brand/black/black.component';
import { BlackGeneralComponent } from './components/sidebars/right/black/general/black-general/black-general.component';
import { WhiteGeneralComponent } from './components/sidebars/right/white/general/white-general/white-general.component';
import { WhiteFooterPlusComponent } from './components/footer/right/white/plus/plus.component';
import { DeveloperIntroComponent } from './components/sections/developer/developer-intro/developer-intro.component';
import { DeveloperProfileComponent } from './components/sections/developer/developer-profile/developer-profile.component';
import { DeveloperEducationComponent } from './components/sections/developer/developer-education/developer-education.component';
import { DeveloperExperienceComponent } from './components/sections/developer/developer-experience/developer-experience.component';
import { DeveloperProjectsComponent } from './components/sections/developer/developer-projects/developer-projects.component';
import { DeveloperTechnicalSkillsComponent } from './components/sections/developer/developer-skills/developer-technical-skills/developer-technical-skills.component';
import { DeveloperSoftSkillsComponent } from './components/sections/developer/developer-skills/developer-soft-skills/developer-soft-skills.component';
import { DeveloperLanguagesComponent } from './components/sections/developer/developer-languages/developer-languages.component';
import { DeveloperHobbiesComponent } from './components/sections/developer/developer-hobbies/developer-hobbies.component';
import { DeveloperReferencesComponent } from './components/sections/developer/developer-references/developer-references.component';
import { DeveloperContactComponent } from './components/sections/developer/developer-contact/developer-contact.component';
import { DeveloperToCvComponent } from './components/sections/developer/developer-to-cv/developer-to-cv.component';
import { BlackDeveloperComponent } from './components/sidebars/right/black/developer/black-developer/black-developer.component';
import { BlackAudiovisualComponent } from './components/sidebars/right/black/audiovisual/black-audiovisual/black-audiovisual.component';
import { OrangeCreditsComponent } from './components/footer/right/orange/orange-credits/orange-credits.component';
import { OrangeIndexComponent } from './components/footer/left/orange/orange-index/orange-index.component';
import { OrangeTotopComponent } from './components/footer/right/orange/orange-totop/orange-totop.component';
import { BlackOrangeSessionComponent } from './components/navbar/session/black-orange/black-orange.component';
import { BlackOrangeBackComponent } from './components/footer/left/black-orange-back/black-orange-back.component';
import { AudiovisualIntroComponent } from './components/sections/audiovisual/audiovisual-intro/audiovisual-intro.component';
import { AudiovisualNextComponent } from './components/sections/audiovisual/audiovisual-next/audiovisual-next.component';
import { AudiovisualOneComponent } from './components/sections/audiovisual/audiovisual-one/audiovisual-one.component';
import { AudiovisualTwoComponent } from './components/sections/audiovisual/audiovisual-two/audiovisual-two.component';
import { AudiovisualThreeComponent } from './components/sections/audiovisual/audiovisual-three/audiovisual-three.component';
import { AudiovisualFourComponent } from './components/sections/audiovisual/audiovisual-four/audiovisual-four.component';
import { AudiovisualFiveComponent } from './components/sections/audiovisual/audiovisual-five/audiovisual-five.component';
import { AudiovisualProfileComponent } from './components/sections/audiovisual/audiovisual-profile/audiovisual-profile.component';
import { AudiovisualDocumentsComponent } from './components/sections/audiovisual/audiovisual-documents/audiovisual-documents.component';
import { AudiovisualProjectsComponent } from './components/sections/audiovisual/audiovisual-projects/audiovisual-projects.component';
import { AudiovisualFeedbackComponent } from './components/sections/audiovisual/audiovisual-feedback/audiovisual-feedback.component';
import { AudiovisualQuotesComponent } from './components/sections/audiovisual/audiovisual-quotes/audiovisual-quotes.component';
import { AudiovisualClosingComponent } from './components/sections/audiovisual/audiovisual-closing/audiovisual-closing.component';
import { ProjectsIntroComponent } from './components/sections/audiovisual/projects-intro/projects-intro.component';
import { ProjectsSeriesComponent } from './components/sections/audiovisual/projects-series/projects-series.component';
import { ProjectsLongshotsComponent } from './components/sections/audiovisual/projects-longshots/projects-longshots.component';
import { ProjectsOthersComponent } from './components/sections/audiovisual/projects-others/projects-others.component';
import { ProjectsToIntroComponent } from './components/sections/audiovisual/projects-to-intro/projects-to-intro.component';
import { ProjectIntroComponent } from './components/sections/audiovisual/project-intro/project-intro.component';
import { ProjectToProjectsComponent } from './components/sections/audiovisual/project-to-projects/project-to-projects.component';
import { SamplesIntroComponent } from './components/sections/audiovisual/samples-intro/samples-intro.component';
import { SamplesToIntroComponent } from './components/sections/audiovisual/samples-to-intro/samples-to-intro.component';
import { SamplesListComponent } from './components/sections/audiovisual/samples-list/samples-list.component';
import { DataToIntroComponent } from './components/sections/audiovisual/data-to-intro/data-to-intro.component';
import { DataIntroComponent } from './components/sections/audiovisual/data-intro/data-intro.component';
import { DataListComponent } from './components/sections/audiovisual/data-list/data-list.component';
import { LogoutComponent } from './components/navbar/session/logout/logout.component';
import { LogoutModalComponent } from './modals/dashboard/logout-modal/logout-modal.component';
import { DashboardGeneralComponent } from './components/dashboard/dashboard-general/dashboard-general.component';
import { DashboardAudiovisualComponent } from './components/dashboard/dashboard-audiovisual/dashboard-audiovisual.component';
import { DashboardDeveloperComponent } from './components/dashboard/dashboard-developer/dashboard-developer.component';
import { SocialModalComponent } from './modals/dashboard/social-modal/social-modal.component';
import { BannersModalComponent } from './modals/dashboard/banners-modal/banners-modal.component';
import { CreditsModalComponent } from './modals/dashboard/credits-modal/credits-modal.component';
import { BloopersModalComponent } from './modals/dashboard/bloopers-modal/bloopers-modal.component';
import { EditTitleCreditModalComponent } from './modals/dashboard/credits-modal/edit-title-credit-modal/edit-title-credit-modal.component';
import { EditSingleCreditModalComponent } from './modals/dashboard/credits-modal/edit-single-credit-modal/edit-single-credit-modal.component';
import { DeleteSingleCreditModalComponent } from './modals/dashboard/credits-modal/delete-single-credit-modal/delete-single-credit-modal.component';
import { CreateSingleCreditModalComponent } from './modals/dashboard/credits-modal/create-single-credit-modal/create-single-credit-modal.component';
import { CreateDoubleCreditModalComponent } from './modals/dashboard/credits-modal/create-double-credit-modal/create-double-credit-modal.component';
import { CreateTripleCreditModalComponent } from './modals/dashboard/credits-modal/create-triple-credit-modal/create-triple-credit-modal.component';
import { EditThanksModalComponent } from './modals/dashboard/credits-modal/edit-thanks-modal/edit-thanks-modal.component';
import { CreateThanksModalComponent } from './modals/dashboard/credits-modal/create-thanks-modal/create-thanks-modal.component';
import { EditMadeModalComponent } from './modals/dashboard/credits-modal/edit-made-modal/edit-made-modal.component';
import { EditMusicCreditModalComponent } from './modals/dashboard/credits-modal/edit-music-credit-modal/edit-music-credit-modal.component';
import { EditBloopersCreditModalComponent } from './modals/dashboard/credits-modal/edit-bloopers-credit-modal/edit-bloopers-credit-modal.component';
import { EditBlooperModalComponent } from './modals/dashboard/bloopers-modal/edit-blooper-modal/edit-blooper-modal.component';
import { DeleteBlooperModalComponent } from './modals/dashboard/bloopers-modal/delete-blooper-modal/delete-blooper-modal.component';
import { EditDivisorBlooperModalComponent } from './modals/dashboard/bloopers-modal/edit-divisor-blooper-modal/edit-divisor-blooper-modal.component';
import { EditEndBlooperModalComponent } from './modals/dashboard/bloopers-modal/edit-end-blooper-modal/edit-end-blooper-modal.component';
import { AudiovisualCoverModalComponent } from './modals/dashboard/audiovisual-cover-modal/audiovisual-cover-modal.component';
import { AudiovisualProfileModalComponent } from './modals/dashboard/audiovisual-profile-modal/audiovisual-profile-modal.component';
import { AudiovisualDivisorsModalComponent } from './modals/dashboard/audiovisual-divisors-modal/audiovisual-divisors-modal.component';
import { AudiovisualPresentationModalComponent } from './modals/dashboard/audiovisual-presentation-modal/audiovisual-presentation-modal.component';
import { AudiovisualProjectsModalComponent } from './modals/dashboard/audiovisual-projects-modal/audiovisual-projects-modal.component';
import { AudiovisualFeedbackModalComponent } from './modals/dashboard/audiovisual-feedback-modal/audiovisual-feedback-modal.component';
import { AudiovisualQuotesModalComponent } from './modals/dashboard/audiovisual-quotes-modal/audiovisual-quotes-modal.component';
import { AudiovisualClosingModalComponent } from './modals/dashboard/audiovisual-closing-modal/audiovisual-closing-modal.component';
import { AudiovisualLinksModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-links-modal.component';
import { EditAudiovisualCoverModalComponent } from './modals/dashboard/audiovisual-cover-modal/edit-audiovisual-cover-modal/edit-audiovisual-cover-modal.component';
import { EditAudiovisualProfileModalComponent } from './modals/dashboard/audiovisual-profile-modal/edit-audiovisual-profile-modal/edit-audiovisual-profile-modal.component';
import { EditAudiovisualPresentationModalComponent } from './modals/dashboard/audiovisual-presentation-modal/edit-audiovisual-presentation-modal/edit-audiovisual-presentation-modal.component';
import { EditAudiovisualMinibioModalComponent } from './modals/dashboard/audiovisual-presentation-modal/edit-audiovisual-minibio-modal/edit-audiovisual-minibio-modal.component';
import { EditAudiovisualWorkModalComponent } from './modals/dashboard/audiovisual-presentation-modal/edit-audiovisual-work-modal/edit-audiovisual-work-modal.component';
import { EditAudiovisualWantModalComponent } from './modals/dashboard/audiovisual-presentation-modal/edit-audiovisual-want-modal/edit-audiovisual-want-modal.component';
import { EditAudiovisualProjectsModalComponent } from './modals/dashboard/audiovisual-projects-modal/edit-audiovisual-projects-modal/edit-audiovisual-projects-modal.component';
import { EditAudiovisualLinksModalComponent } from './modals/dashboard/audiovisual-links-modal/edit-audiovisual-links-modal/edit-audiovisual-links-modal.component';
import { AudiovisualProjectsPageModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/audiovisual-projects-page-modal.component';
import { AudiovisualSamplesPageModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-samples-page-modal/audiovisual-samples-page-modal.component';
import { AudiovisualDataPageModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-data-page-modal/audiovisual-data-page-modal.component';
import { EditAudiovisualProjectsPagePresentationModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/edit-audiovisual-projects-page-presentation-modal/edit-audiovisual-projects-page-presentation-modal.component';
import { CreateAudiovisualSeriesModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/create-audiovisual-series-modal/create-audiovisual-series-modal.component';
import { EditAudiovisualSeriesModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/edit-audiovisual-series-modal/edit-audiovisual-series-modal.component';
import { DeleteAudiovisualSeriesModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/delete-audiovisual-series-modal/delete-audiovisual-series-modal.component';
import { EditAudiovisualSamplesPagePresentationModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-samples-page-modal/edit-audiovisual-samples-page-presentation-modal/edit-audiovisual-samples-page-presentation-modal.component';
import { CreateAudiovisualSampleModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-samples-page-modal/create-audiovisual-sample-modal/create-audiovisual-sample-modal.component';
import { EditAudiovisualSampleModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-samples-page-modal/edit-audiovisual-sample-modal/edit-audiovisual-sample-modal.component';
import { DeleteAudiovisualSampleModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-samples-page-modal/delete-audiovisual-sample-modal/delete-audiovisual-sample-modal.component';
import { EditAudiovisualDataPagePresentationModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-data-page-modal/edit-audiovisual-data-page-presentation-modal/edit-audiovisual-data-page-presentation-modal.component';
import { EditAudiovisualDownloadableDocumentsModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-data-page-modal/edit-audiovisual-downloadable-documents-modal/edit-audiovisual-downloadable-documents-modal.component';
import { EditAudiovisualDownloadableProjectsModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-data-page-modal/edit-audiovisual-downloadable-projects-modal/edit-audiovisual-downloadable-projects-modal.component';
import { EditAudiovisualDownloadableSamplesModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-data-page-modal/edit-audiovisual-downloadable-samples-modal/edit-audiovisual-downloadable-samples-modal.component';
import { EditIntroAudiovisualFeedbackModalComponent } from './modals/dashboard/audiovisual-feedback-modal/edit-intro-audiovisual-feedback-modal/edit-intro-audiovisual-feedback-modal.component';
import { CreateAudiovisualFeedbackModalComponent } from './modals/dashboard/audiovisual-feedback-modal/create-audiovisual-feedback-modal/create-audiovisual-feedback-modal.component';
import { EditAudiovisualFeedbackModalComponent } from './modals/dashboard/audiovisual-feedback-modal/edit-audiovisual-feedback-modal/edit-audiovisual-feedback-modal.component';
import { DeleteAudiovisualFeedbackModalComponent } from './modals/dashboard/audiovisual-feedback-modal/delete-audiovisual-feedback-modal/delete-audiovisual-feedback-modal.component';
import { EditIntroAudiovisualQuotesModalComponent } from './modals/dashboard/audiovisual-quotes-modal/edit-intro-audiovisual-quotes-modal/edit-intro-audiovisual-quotes-modal.component';
import { CreateAudiovisualQuoteModalComponent } from './modals/dashboard/audiovisual-quotes-modal/create-audiovisual-quote-modal/create-audiovisual-quote-modal.component';
import { EditAudiovisualQuoteModalComponent } from './modals/dashboard/audiovisual-quotes-modal/edit-audiovisual-quote-modal/edit-audiovisual-quote-modal.component';
import { DeleteAudiovisualQuoteModalComponent } from './modals/dashboard/audiovisual-quotes-modal/delete-audiovisual-quote-modal/delete-audiovisual-quote-modal.component';
import { EditAudiovisualClosingModalComponent } from './modals/dashboard/audiovisual-closing-modal/edit-audiovisual-closing-modal/edit-audiovisual-closing-modal.component';
import { DeveloperIntroModalComponent } from './modals/dashboard/developer-intro-modal/developer-intro-modal.component';
import { DeveloperProfileModalComponent } from './modals/dashboard/developer-profile-modal/developer-profile-modal.component';
import { DeveloperProjectsModalComponent } from './modals/dashboard/developer-projects-modal/developer-projects-modal.component';
import { DeveloperEducationModalComponent } from './modals/dashboard/developer-education-modal/developer-education-modal.component';
import { DeveloperExperienceModalComponent } from './modals/dashboard/developer-experience-modal/developer-experience-modal.component';
import { DeveloperSkillsModalComponent } from './modals/dashboard/developer-skills-modal/developer-skills-modal.component';
import { DeveloperCommentsModalComponent } from './modals/dashboard/developer-comments-modal/developer-comments-modal.component';
import { DeveloperHobbiesModalComponent } from './modals/dashboard/developer-hobbies-modal/developer-hobbies-modal.component';
import { CreateDeveloperProjectModalComponent } from './modals/dashboard/developer-projects-modal/create-developer-project-modal/create-developer-project-modal.component';
import { EditDeveloperProjectModalComponent } from './modals/dashboard/developer-projects-modal/edit-developer-project-modal/edit-developer-project-modal.component';
import { DeleteDeveloperProjectModalComponent } from './modals/dashboard/developer-projects-modal/delete-developer-project-modal/delete-developer-project-modal.component'
import { CreateDeveloperExperienceModalComponent } from './modals/dashboard/developer-experience-modal/create-developer-experience-modal/create-developer-experience-modal.component';
import { EditDeveloperExperienceModalComponent } from './modals/dashboard/developer-experience-modal/edit-developer-experience-modal/edit-developer-experience-modal.component';
import { DeleteDeveloperExperienceModalComponent } from './modals/dashboard/developer-experience-modal/delete-developer-experience-modal/delete-developer-experience-modal.component';
import { CreateDeveloperTechnicalSkillModalComponent } from './modals/dashboard/developer-skills-modal/create-developer-technical-skill-modal/create-developer-technical-skill-modal.component';
import { EditDeveloperTechnicalSkillModalComponent } from './modals/dashboard/developer-skills-modal/edit-developer-technical-skill-modal/edit-developer-technical-skill-modal.component';
import { CreateDeveloperSoftSkillModalComponent } from './modals/dashboard/developer-skills-modal/create-developer-soft-skill-modal/create-developer-soft-skill-modal.component';
import { EditDeveloperSoftSkillModalComponent } from './modals/dashboard/developer-skills-modal/edit-developer-soft-skill-modal/edit-developer-soft-skill-modal.component';
import { CreateDeveloperLanguageSkillModalComponent } from './modals/dashboard/developer-skills-modal/create-developer-language-skill-modal/create-developer-language-skill-modal.component';
import { EditDeveloperLanguageSkillModalComponent } from './modals/dashboard/developer-skills-modal/edit-developer-language-skill-modal/edit-developer-language-skill-modal.component';
import { CreateDeveloperHobbyModalComponent } from './modals/dashboard/developer-hobbies-modal/create-developer-hobby-modal/create-developer-hobby-modal.component';
import { EditDeveloperHobbyModalComponent } from './modals/dashboard/developer-hobbies-modal/edit-developer-hobby-modal/edit-developer-hobby-modal.component';
import { DeleteDeveloperHobbyModalComponent } from './modals/dashboard/developer-hobbies-modal/delete-developer-hobby-modal/delete-developer-hobby-modal.component';
import { CreateDeveloperCommentModalComponent } from './modals/dashboard/developer-comments-modal/create-developer-comment-modal/create-developer-comment-modal.component';
import { EditDeveloperCommentModalComponent } from './modals/dashboard/developer-comments-modal/edit-developer-comment-modal/edit-developer-comment-modal.component';
import { DeleteDeveloperCommentModalComponent } from './modals/dashboard/developer-comments-modal/delete-developer-comment-modal/delete-developer-comment-modal.component';
import { WhiteAudiovisualComponent } from './components/sidebars/right/white/audiovisual/white-audiovisual/white-audiovisual.component';
import { SerieComponent } from './components/sections/audiovisual/projects-series/serie/serie.component';
import { OtherComponent } from './components/sections/audiovisual/projects-others/other/other.component';
import { LongshotComponent } from './components/sections/audiovisual/projects-longshots/longshot/longshot.component';
import { AudiovisualCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-credits.component';
import { AudiovisualSingleCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-single-credits/audiovisual-single-credits.component';
import { AudiovisualDoubleCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-double-credits/audiovisual-double-credits.component';
import { AudiovisualTripleCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-triple-credits/audiovisual-triple-credits.component';
import { AudiovisualThanksCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-thanks-credits/audiovisual-thanks-credits.component';
import { AudiovisualMadeCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-made-credits/audiovisual-made-credits.component';
import { AudiovisualMusicCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-music-credits/audiovisual-music-credits.component';
import { AudiovisualMoreCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-more-credits/audiovisual-more-credits.component';
import { AudiovisualBloopersCreditsComponent } from './components/sections/audiovisual/audiovisual-credits/audiovisual-bloopers-credits/audiovisual-bloopers-credits.component';
import { AudiovisualBloopersComponent } from './components/sections/audiovisual/audiovisual-bloopers/audiovisual-bloopers.component';
import { DeveloperSkillsComponent } from './components/sections/developer/developer-skills/developer-skills.component';
import { WhiteOrangeSessionComponent } from './components/navbar/session/white-orange/white-orange.component';
import { EditDoubleCreditModalComponent } from './modals/dashboard/credits-modal/edit-double-credit-modal/edit-double-credit-modal.component';
import { DeleteDoubleCreditModalComponent } from './modals/dashboard/credits-modal/delete-double-credit-modal/delete-double-credit-modal.component';
import { EditTripleCreditModalComponent } from './modals/dashboard/credits-modal/edit-triple-credit-modal/edit-triple-credit-modal.component';
import { DeleteTripleCreditModalComponent } from './modals/dashboard/credits-modal/delete-triple-credit-modal/delete-triple-credit-modal.component';
import { DeleteThanksModalComponent } from './modals/dashboard/credits-modal/delete-thanks-modal/delete-thanks-modal.component';
import { CreateMadeModalComponent } from './modals/dashboard/credits-modal/create-made-modal/create-made-modal.component';
import { DeleteMadeModalComponent } from './modals/dashboard/credits-modal/delete-made-modal/delete-made-modal.component';
import { CreateMoreModalComponent } from './modals/dashboard/credits-modal/create-more-modal/create-more-modal.component';
import { EditMoreModalComponent } from './modals/dashboard/credits-modal/edit-more-modal/edit-more-modal.component';
import { DeleteMoreModalComponent } from './modals/dashboard/credits-modal/delete-more-modal/delete-more-modal.component';
import { EditAudiovisualDivisorModalComponent } from './modals/dashboard/audiovisual-divisors-modal/edit-audiovisual-divisor-modal/edit-audiovisual-divisor-modal.component';
import { CreateAudiovisualLongshotsModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/create-audiovisual-longshots-modal/create-audiovisual-longshots-modal.component';
import { EditAudiovisualLongshotsModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/edit-audiovisual-longshots-modal/edit-audiovisual-longshots-modal.component';
import { DeleteAudiovisualLongshotsModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/delete-audiovisual-longshots-modal/delete-audiovisual-longshots-modal.component';
import { CreateAudiovisualOthersModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/create-audiovisual-others-modal/create-audiovisual-others-modal.component';
import { EditAudiovisualOthersModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/edit-audiovisual-others-modal/edit-audiovisual-others-modal.component';
import { DeleteAudiovisualOthersModalComponent } from './modals/dashboard/audiovisual-links-modal/audiovisual-projects-page-modal/delete-audiovisual-others-modal/delete-audiovisual-others-modal.component';
import { DeleteDeveloperTechnicalSkillModalComponent } from './modals/dashboard/developer-skills-modal/delete-developer-technical-skill-modal/delete-developer-technical-skill-modal.component';
import { DeleteDeveloperSoftSkillModalComponent } from './modals/dashboard/developer-skills-modal/delete-developer-soft-skill-modal/delete-developer-soft-skill-modal.component';
import { DeleteDeveloperLanguageSkillModalComponent } from './modals/dashboard/developer-skills-modal/delete-developer-language-skill-modal/delete-developer-language-skill-modal.component';
import { HelpersModalComponent } from './modals/dashboard/helpers-modal/helpers-modal.component';
import { FormsModalComponent } from './modals/dashboard/forms-modal/forms-modal.component';
import { ButtonsModalComponent } from './modals/dashboard/buttons-modal/buttons-modal.component';
import { CreateButtonModalComponent } from './modals/dashboard/buttons-modal/create-button-modal/create-button-modal.component';
import { EditButtonModalComponent } from './modals/dashboard/buttons-modal/edit-button-modal/edit-button-modal.component';
import { DeleteButtonModalComponent } from './modals/dashboard/buttons-modal/delete-button-modal/delete-button-modal.component';
import { EditHelperModalComponent } from './modals/dashboard/helpers-modal/edit-helper-modal/edit-helper-modal.component';
import { CreateHelperModalComponent } from './modals/dashboard/helpers-modal/create-helper-modal/create-helper-modal.component';
import { CreateFormModalComponent } from './modals/dashboard/forms-modal/create-form-modal/create-form-modal.component';
import { EditFormModalComponent } from './modals/dashboard/forms-modal/edit-form-modal/edit-form-modal.component';
import { BrandModalComponent } from './modals/dashboard/brand-modal/brand-modal.component';
import { EditBrandModalComponent } from './modals/dashboard/brand-modal/edit-brand-modal/edit-brand-modal.component';
import { MessageModalComponent } from './modals/general/message-modal/message-modal.component';
import { DeveloperCvModalComponent } from './modals/dashboard/developer-cv-modal/developer-cv-modal.component';
import { EditDeveloperCvModalComponent } from './modals/dashboard/developer-cv-modal/edit-developer-cv-modal/edit-developer-cv-modal.component';
import { InfoDeleteModalComponent } from './modals/general/info-delete-modal/info-delete-modal.component';
import { SectionsModalComponent } from './modals/dashboard/sections-modal/sections-modal.component';
import { DivisorsModalComponent } from './modals/dashboard/sections-modal/divisors-modal/divisors-modal.component';
import { TitlesModalComponent } from './modals/dashboard/sections-modal/titles-modal/titles-modal.component';
import { IconsModalComponent } from './modals/dashboard/sections-modal/icons-modal/icons-modal.component';
import { DashboardModalComponent } from './modals/dashboard/sections-modal/dashboard-modal/dashboard-modal.component';
import { UserDashboardComponent } from './pages/dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/dashboard/admin-dashboard/admin-dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        IndexComponent,
        IntroComponent,
        LoginComponent,
        RegisterComponent,
        ErrorComponent,
        CreditsComponent,
        BloopersComponent,
        AudiovisualComponent,
        DeveloperComponent,
        ProjectsComponent,
        SamplesComponent,
        PlusComponent,
        LinksComponent,
        DataComponent,
        BlackSessionComponent,
        WhiteBrandComponent,
        BlackBrandComponent,
        WhitePlusComponent,
        BlackPlusComponent,
        BlackGeneralComponent,
        WhiteGeneralComponent,
        CameraComponent,
        CodeComponent,
        BugComponent,
        BlackFastForwardComponent,
        WhiteFastForwardComponent,
        MinibioComponent,
        IWantComponent,
        MyWorkComponent,
        PlusComponent,
        WhiteBackComponent,
        BlackBackComponent,
        WhiteSessionComponent,
        BlackGeneralComponent,
        WhiteAudiovisualComponent,
        WhiteFooterPlusComponent,
        DeveloperIntroComponent,
        DeveloperProfileComponent,
        DeveloperEducationComponent,
        DeveloperExperienceComponent,
        DeveloperProjectsComponent,
        DeveloperTechnicalSkillsComponent,
        DeveloperSoftSkillsComponent,
        DeveloperLanguagesComponent,
        DeveloperHobbiesComponent,
        DeveloperReferencesComponent,
        DeveloperContactComponent,
        DeveloperToCvComponent,
        BlackDeveloperComponent,
        BlackAudiovisualComponent,
        OrangeCreditsComponent,
        OrangeIndexComponent,
        OrangeTotopComponent,
        BlackOrangeSessionComponent,
        BlackOrangeBackComponent,
        AudiovisualIntroComponent,
        AudiovisualNextComponent,
        AudiovisualOneComponent,
        AudiovisualTwoComponent,
        AudiovisualThreeComponent,
        AudiovisualFourComponent,
        AudiovisualFiveComponent,
        AudiovisualProfileComponent,
        AudiovisualDocumentsComponent,
        AudiovisualProjectsComponent,
        AudiovisualFeedbackComponent,
        AudiovisualQuotesComponent,
        AudiovisualClosingComponent,
        ProjectsIntroComponent,
        ProjectsSeriesComponent,
        ProjectsLongshotsComponent,
        ProjectsOthersComponent,
        ProjectsToIntroComponent,
        ProjectIntroComponent,
        ProjectToProjectsComponent,
        SamplesIntroComponent,
        SamplesToIntroComponent,
        SamplesListComponent,
        DataToIntroComponent,
        DataIntroComponent,
        DataListComponent,
        LogoutComponent,
        LogoutModalComponent,
        DashboardGeneralComponent,
        DashboardAudiovisualComponent,
        DashboardDeveloperComponent,
        SocialModalComponent,
        BannersModalComponent,
        CreditsModalComponent,
        BloopersModalComponent,
        EditTitleCreditModalComponent,
        EditSingleCreditModalComponent,
        DeleteSingleCreditModalComponent,
        CreateSingleCreditModalComponent,
        CreateDoubleCreditModalComponent,
        CreateTripleCreditModalComponent,
        EditThanksModalComponent,
        CreateThanksModalComponent,
        EditMadeModalComponent,
        EditMusicCreditModalComponent,
        EditBloopersCreditModalComponent,
        EditBlooperModalComponent,
        DeleteBlooperModalComponent,
        EditDivisorBlooperModalComponent,
        EditEndBlooperModalComponent,
        AudiovisualCoverModalComponent,
        AudiovisualProfileModalComponent,
        AudiovisualDivisorsModalComponent,
        AudiovisualPresentationModalComponent,
        AudiovisualProjectsModalComponent,
        AudiovisualFeedbackModalComponent,
        AudiovisualQuotesModalComponent,
        AudiovisualClosingModalComponent,
        AudiovisualLinksModalComponent,
        EditAudiovisualCoverModalComponent,
        EditAudiovisualProfileModalComponent,
        EditAudiovisualPresentationModalComponent,
        EditAudiovisualMinibioModalComponent,
        EditAudiovisualWorkModalComponent,
        EditAudiovisualWantModalComponent,
        EditAudiovisualProjectsModalComponent,
        EditAudiovisualLinksModalComponent,
        AudiovisualProjectsPageModalComponent,
        AudiovisualSamplesPageModalComponent,
        AudiovisualDataPageModalComponent,
        EditAudiovisualProjectsPagePresentationModalComponent,
        CreateAudiovisualSeriesModalComponent,
        EditAudiovisualSeriesModalComponent,
        DeleteAudiovisualSeriesModalComponent,
        EditAudiovisualSamplesPagePresentationModalComponent,
        CreateAudiovisualSampleModalComponent,
        EditAudiovisualSampleModalComponent,
        DeleteAudiovisualSampleModalComponent,
        EditAudiovisualDataPagePresentationModalComponent,
        EditAudiovisualDownloadableDocumentsModalComponent,
        EditAudiovisualDownloadableProjectsModalComponent,
        EditAudiovisualDownloadableSamplesModalComponent,
        EditIntroAudiovisualFeedbackModalComponent,
        CreateAudiovisualFeedbackModalComponent,
        EditAudiovisualFeedbackModalComponent,
        DeleteAudiovisualFeedbackModalComponent,
        EditIntroAudiovisualQuotesModalComponent,
        CreateAudiovisualQuoteModalComponent,
        EditAudiovisualQuoteModalComponent,
        DeleteAudiovisualQuoteModalComponent,
        EditAudiovisualClosingModalComponent,
        DeveloperIntroModalComponent,
        DeveloperProfileModalComponent,
        DeveloperProjectsModalComponent,
        DeveloperEducationModalComponent,
        DeveloperExperienceModalComponent,
        DeveloperSkillsModalComponent,
        DeveloperCommentsModalComponent,
        DeveloperHobbiesModalComponent,
        CreateDeveloperProjectModalComponent,
        EditDeveloperProjectModalComponent,
        DeleteDeveloperProjectModalComponent,
        CreateDeveloperExperienceModalComponent,
        EditDeveloperExperienceModalComponent,
        DeleteDeveloperExperienceModalComponent,
        CreateDeveloperTechnicalSkillModalComponent,
        EditDeveloperTechnicalSkillModalComponent,
        CreateDeveloperSoftSkillModalComponent,
        EditDeveloperSoftSkillModalComponent,
        CreateDeveloperLanguageSkillModalComponent,
        EditDeveloperLanguageSkillModalComponent,
        CreateDeveloperHobbyModalComponent,
        EditDeveloperHobbyModalComponent,
        DeleteDeveloperHobbyModalComponent,
        CreateDeveloperCommentModalComponent,
        EditDeveloperCommentModalComponent,
        DeleteDeveloperCommentModalComponent,
        SerieComponent,
        OtherComponent,
        LongshotComponent,
        AudiovisualCreditsComponent,
        AudiovisualSingleCreditsComponent,
        AudiovisualDoubleCreditsComponent,
        AudiovisualTripleCreditsComponent,
        AudiovisualThanksCreditsComponent,
        AudiovisualMadeCreditsComponent,
        AudiovisualMusicCreditsComponent,
        AudiovisualMoreCreditsComponent,
        AudiovisualBloopersCreditsComponent,
        AudiovisualBloopersComponent,
        DeveloperSkillsComponent,
        WhiteOrangeSessionComponent,
        EditDoubleCreditModalComponent,
        DeleteDoubleCreditModalComponent,
        EditTripleCreditModalComponent,
        DeleteTripleCreditModalComponent,
        DeleteThanksModalComponent,
        CreateMadeModalComponent,
        DeleteMadeModalComponent,
        CreateMoreModalComponent,
        EditMoreModalComponent,
        DeleteMoreModalComponent,
        EditAudiovisualDivisorModalComponent,
        CreateAudiovisualLongshotsModalComponent,
        EditAudiovisualLongshotsModalComponent,
        DeleteAudiovisualLongshotsModalComponent,
        CreateAudiovisualOthersModalComponent,
        EditAudiovisualOthersModalComponent,
        DeleteAudiovisualOthersModalComponent,
        DeleteDeveloperTechnicalSkillModalComponent,
        DeleteDeveloperSoftSkillModalComponent,
        DeleteDeveloperLanguageSkillModalComponent,
        HelpersModalComponent,
        FormsModalComponent,
        ButtonsModalComponent,
        CreateButtonModalComponent,
        EditButtonModalComponent,
        DeleteButtonModalComponent,
        EditHelperModalComponent,
        CreateHelperModalComponent,
        CreateFormModalComponent,
        EditFormModalComponent,
        BrandModalComponent,
        EditBrandModalComponent,
        MessageModalComponent,
        DeveloperCvModalComponent,
        EditDeveloperCvModalComponent,
        InfoDeleteModalComponent,
        SectionsModalComponent,
        DivisorsModalComponent,
        TitlesModalComponent,
        IconsModalComponent,
        DashboardModalComponent,
        UserDashboardComponent,
        AdminDashboardComponent
   ],
   providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi:true }
],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ]
})
export class AppModule { }
